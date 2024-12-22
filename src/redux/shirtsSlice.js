import { createSlice } from '@reduxjs/toolkit'

export const shirtsSlice = createSlice({
    name: 'shirts',
    initialState: {
        selectedCategory: "all"
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
})

export const getSelectedCategory = state => state.shirts.selectedCategory;
export const { filterCategory } = shirtsSlice.actions;
export default shirtsSlice.reducer;