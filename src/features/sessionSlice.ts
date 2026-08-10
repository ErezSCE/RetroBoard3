// src/features/sessionSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a minimal Card type for demo purposes
export interface Card {
  id: string;
  content: string;
  columnId: string;
  // Additional fields can be added as needed
}

export interface SessionState {
  cards: Record<string, Card>;
}

const initialState: SessionState = {
  cards: {},
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    // Replace the whole card collection (e.g., on initial load)
    setCards(state, action: PayloadAction<Card[]>) {
      const newCards: Record<string, Card> = {};
      action.payload.forEach((card) => {
        newCards[card.id] = card;
      });
      state.cards = newCards;
    },
    // Add a single card (e.g., when a new card is created by another user)
    cardCreated(state, action: PayloadAction<Card>) {
      const card = action.payload;
      state.cards[card.id] = card;
    },
    // Update a card's content or column (e.g., edit or move)
    cardUpdated(state, action: PayloadAction<Partial<Card> & { id: string }>) {
      const { id, ...changes } = action.payload;
      if (state.cards[id]) {
        state.cards[id] = { ...state.cards[id], ...changes } as Card;
      }
    },
    // Remove a card (optional, not used in current story but useful)
    cardRemoved(state, action: PayloadAction<string>) {
      delete state.cards[action.payload];
    },
  },
});

export const { setCards, cardCreated, cardUpdated, cardRemoved } = sessionSlice.actions;
export default sessionSlice.reducer;
