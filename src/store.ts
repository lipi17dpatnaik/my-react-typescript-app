import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { value: { username: "" } };

// A function that accepts an initial state, an object of reducer functions,
// and a "slice name", and automatically generates action creators and
// action types that correspond to the reducers and state.
const userSlice = createSlice({
    name: "username",
    initialState,
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = initialState.value;
        }
    }
})

export const { login, logout } = userSlice.actions;

export const store = configureStore({
    //configureStore is needed to create the store, this takes reducer
    // as an argument
    reducer: {
        username: userSlice.reducer,
    }
});