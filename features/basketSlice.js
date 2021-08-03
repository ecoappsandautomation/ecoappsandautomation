import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
	name: "basket",
	initialState: {
		items: [],
	},
	reducers: {
		addBasketItem: (state, action) => {
			state.items = [...state.items, action.payload];
		},
		updateBasketItem: (state, action) => {
			let newBasket = [...state.items];
			const index = state.items.findIndex(
				(basketItem) => basketItem.id === action.payload.id
			);
			if (index >= 0) {
				newBasket[index].quantity = action.payload.quantity;
				state.items = newBasket;
			} else {
				return state;
			}
		},
		removeBasketItem: (state, action) => {
			let newBasket = [...state.items];

			// const index = state.items.findIndex(
			// 	(basketItem) => basketItem[index].item.id === action.payload.id
			// );
			const index = state.items.findIndex(
				(basketItem) => basketItem.id === action.payload.id
			);
			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.error(
					`Can't remove product (id: ${action.payload.item.id}) as it's not in the basket.`
				);
			}

			state.items = newBasket;
		},
	},
});

export const { addBasketItem, removeBasketItem, updateBasketItem } =
	basketSlice.actions;

export const selectBasket = (state) => state.basket.items;

export const selectTotal = (state) =>
	state.basket.items.reduce(
		(amount, item) => amount + item.price * item.quantity,
		0
	);

export default basketSlice.reducer;
