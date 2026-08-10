type Card = {
  id: string;
  columnId: string;
  position: number;
};

/**
 * Simple in‑memory store used for the purpose of this kata.
 * In a real application this would be replaced by proper DB access.
 */
export const store = {
  /** Map key is `${sessionId}:${cardId}` */
  cards: new Map<string, Card>(),

  /**
   * Moves (or creates) a card within a session.
   */
  moveCard(
    sessionId: string,
    cardId: string,
    columnId: string,
    position: number,
  ) {
    const key = `${sessionId}:${cardId}`;
    const existing = this.cards.get(key);
    const card: Card = existing ?? { id: cardId, columnId, position };
    card.columnId = columnId;
    card.position = position;
    this.cards.set(key, card);
  },
};
