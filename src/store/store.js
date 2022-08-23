import {configureStore} from "@reduxjs/toolkit"
import QuotesReducer from "./features/quotesSlice"

export default configureStore({
    reducer:{
        quotes:QuotesReducer,

    },
})
