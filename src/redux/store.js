import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import formReducer from "./formSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        form: formReducer,
    },
});

console.log(store, "store");

export default store;
