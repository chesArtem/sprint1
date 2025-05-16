import { createSlice } from '@reduxjs/toolkit';

export const ingredientDetailsSlice = createSlice({
	name: 'ingredientDetails',
	initialState: {
		card: null,
	},
	selectors: {
		getCard: (state) => state.card,
	},
	reducers: {
		setIngredient: (state, action) => {
			state.card = action.payload;
		},
		clearIngredient: (state) => {
			state.card = null;
		},
	},
});

export const { setIngredient, clearIngredient } =
	ingredientDetailsSlice.actions;
export const { getCard } = ingredientDetailsSlice.selectors;
