import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: "form",
    initialState: {
        step1: {
            name: "",
            email: "",
        },
        step2: {
            address: "",
            phone: "",
        },
    },
    reducers: {
        updateStep1: (state, action) => {
            state.step1 = { ...state.step1, ...action.payload };
        },
        updateStep2: (state, action) => {
            state.step2 = { ...state.step2, ...action.payload };
        },
        resetForm: (state) => {
            state.step1 = { name: "", email: "" };
            state.step2 = { address: "", phone: "" };
        },
    },
});

export const { updateStep1, updateStep2, resetForm } = formSlice.actions;
export default formSlice.reducer;
