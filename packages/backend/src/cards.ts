// Card model and in‑memory repository for the retroboard backend.
// This is a lightweight implementation used for the current feature
// (edit/delete with ownership validation). In a real application this
// would be backed by a PostgreSQL database via an ORM or query builder.

import { v4 as uuidv4 } from 'uuid';

/**
 * Represents a card placed on a retro board.
 */
export interface Card {
  /** Unique identifier for the card */
  id: string;
  /** Identifier of the session the card belongs to */
  sessionId: string;
  /** Text content of the card */
  content: string;
  /** Name of the user who created the card */
  authorName: string;
  /** Timestamp of creation (ISO string) */
  createdAt: string;
  /** Timestamp of last update (ISO string) */
  updatedAt: string;
}

/** In‑memory store keyed by card id */
const cardStore = new Map<string, Card>();

/** Create a new card and store it */
export function createCard(params: {
  sessionId: string;
  content: string;
  authorName: string;
}): Card {
  const now = new Date().toISOString();
  const card: Card = {
    id: uuidv4(),
    sessionId: params.sessionId,
    content: params.content,
    authorName: params.authorName,
    createdAt: now,
    updatedAt: now,
  };
  cardStore.set(card.id, card);
  return card;
}

/** Retrieve a card by its id */
export function getCard(cardId: string): Card | undefined {
  return cardStore.get(cardId);
}

/** Update the content of a card. Ownership must be validated by the caller. */
export function updateCard(cardId: string, updates: { content?: string }): Card | undefined {
  const card = cardStore.get(cardId);
  if (!card) return undefined;
  if (updates.content !== undefined) {
    card.content = updates.content;
  }
  card.updatedAt = new Date().toISOString();
  cardStore.set(cardId, card);
  return card;
}

/** Delete a card from the store */
export function deleteCard(cardId: string): boolean {
  return cardStore.delete(cardId);
}

/** Expose the store for testing purposes */
export function __clearStore() {
  cardStore.clear();
}
