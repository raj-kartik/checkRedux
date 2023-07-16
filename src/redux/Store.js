import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";

const Store = configureStore({
    reducer:{
        slice:Slice
    }
})

export default Store;