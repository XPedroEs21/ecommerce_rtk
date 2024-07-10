import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
};

const CartSlice = createSlice({
 name: 'cart',
 initialState,
 reducers: {
    addItemToCart(state, action){                                                           //This reducer function handles the action of adding an item to the cart, takes two parameters: state (current state of the slice) and action (the dispatched action containing the payload).
        const existingItem = state.cartItems.find(item => item.id === action.payload.id);   //It first checks if the item already exists in the cart by searching for its ID within state.cartItems.
        if (existingItem) {                                                                 //If the item exists (existingItem is true), it increases the quantity of the existing item in the cart by 1.
            existingItem.quantity += 1;
        } else {
            state.cartItems.push({...action.payload, quantity: 1});                         //If the item doesn't exist in the cart, it adds the item to the cartItems array with a quantity of 1.
        }
    },
    removeItemFromCart (state, action) {                                                    //This reducer function handles the action of removing an item from the cart.
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload);       //It updates the cartItems array by filtering out the item with the ID provided in the action payload.
    },
    clearCart (state) {                                                                     //This reducer function handles the action of clearing the entire cart.
        state.cartItems = [];                                                               //It sets the cartItems array to an empty array, effectively clearing all items from the cart.
    },
    increaseItemQuantity (state, action) {                                                  //This reducer function handles the action of increasing the quantity of a specific item in the cart.
        const itemToIncrease = state.cartItems.find(item => item.id === action.payload);    //It finds the item in the shopping cart whose identifier (id) matches the identifier passed in the action payload.
        if (itemToIncrease) {                                                               //If the item is found (itemToIncrease is not undefined), it increments the quantity property of that item by 1.
            itemToIncrease.quantity += 1;
            }
    },
    decreaseItemQuantity (state, action) {                                                  //This reducer function handles the action of decreasing the quantity of a specific item in the cart.
        const itemToDecrease = state.cartItems.find(item => item.id === action.payload);    //It attempts to find the item in the shopping cart whose identifier (id) matches the identifier provided in the action payload.
        if (itemToDecrease && itemToDecrease.quantity >1) {                                 //If the item is found (itemToDecrease is not undefined) and its quantity is greater than 1, it decrements the quantity property of that item by 1.
            itemToDecrease.quantity -=1;
        }
    },

 }
});

export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;

