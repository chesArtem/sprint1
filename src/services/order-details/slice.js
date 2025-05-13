import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addOrder } from '../../utils/api';

export const createOrder = createAsyncThunk('addOrder', async () => {
	return addOrder();
});

export const orderSlice = createSlice({
	name: 'order',
	initialState: {
		order: null,
		loading: false,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(createOrder.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(createOrder.fulfilled, (state, action) => {
				state.order = action.payload;
				state.loading = false;
			})
			.addCase(createOrder.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});
