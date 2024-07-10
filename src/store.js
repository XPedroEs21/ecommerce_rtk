import { configureStore } from "@reduxjs/toolkit";                      //The code imports the configureStore function from @reduxjs/toolkit, used to create the Redux store.
import cartReducer from './Components/CartSlice';                       //It also imports the reducer function, cartReducer, from the CartSlice file, assuming that you have a slice for managing the shopping cart state defined in the file.

const store = configureStore({                                          //configureStore is invoked with an object containing the store configuration options.
    reducer: {                                                          //The reducer property is specified as an object where each key represents a slice of state, and each value represents the corresponding reducer function.
        cart: cartReducer,                                              //In this case, the cartReducer is associated with the cart slice of state. This means that the state managed by the cartReducer will be stored under the cart key in the Redux store.
    },
});

export default store;