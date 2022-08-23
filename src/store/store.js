import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "../components/main-components/feedbacks/categories-slice";
import feedbacksSlice from "../components/main-components/feedbacks/feedbacks-slice";

export const store = configureStore({
    reducer:{
        feedbacks:feedbacksSlice,
        categories: categoriesSlice,
    },
})
