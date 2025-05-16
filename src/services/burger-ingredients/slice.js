import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getIngredientsApi } from '../../utils/api';

export const initialState = {
	ingredients: [],
	loading: false,
	error: null,
};

export const loadIngredients = createAsyncThunk('loadIngredients', async () => {
	return getIngredientsApi();
});

export const ingredientsSlice = createSlice({
	name: 'burgerIngredients',
	initialState,
	reducers: {},
	selectors: {
		getIngredients: (state) => state.ingredients,
		getLoadingIngredients: (state) => state.loading,
		getErrorIngredients: (state) => state.error,
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadIngredients.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(loadIngredients.fulfilled, (state, action) => {
				state.ingredients = action.payload.data;
				state.loading = false;
				state.error = null;
			})
			.addCase(loadIngredients.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error?.massage ?? 'Unknown error';
			});
	},
});

export const { getIngredients, getLoadingIngredients, getErrorIngredients } =
	ingredientsSlice.selectors;
