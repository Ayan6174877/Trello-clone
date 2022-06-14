import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./addItems";


const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
    }
})



export default store;