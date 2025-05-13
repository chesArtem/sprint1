import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { ingredientsSlice } from './burger-ingredients/slice';
import { constructorSlice } from './burger-constructor/slice';
import { ingredientDetailsSlice } from './ingredient-details/slice';
import { orderSlice } from './order-details/slice';

export const rootReducer = combineSlices(
	ingredientsSlice,
	constructorSlice,
	ingredientDetailsSlice,
	orderSlice
);

export const store = configureStore({
	reducer: rootReducer,
});
