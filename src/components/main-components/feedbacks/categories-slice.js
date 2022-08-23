import { createSlice } from "@reduxjs/toolkit"
import { categoriesLink } from "../../../context/context"
import { createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    categories:[],
    loading: null,
    error: null,
}
export const getCategories = createAsyncThunk(
    'categories/getCategories',
    async function(_, {rejectWithValue} ) {
        try {
            const res = await fetch(categoriesLink)
            if(!res.ok) {
                throw new Error('Server error: ', res.status)
            }
            const data = await res.json()
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
    )

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getCategories.fulfilled]: (state, action) => {
            state.error = false
            state.loading = false
            state.categories = action.payload
        },
    }
})

export default categoriesSlice.reducer