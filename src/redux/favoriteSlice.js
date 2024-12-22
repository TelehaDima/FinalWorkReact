import { createSlice } from '@reduxjs/toolkit'
import FavoriteItem from '../Components/Favorites/FavoriteItem'

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favoriteItems: []
    },
    reducers: {
        addItemToFavorite: (state, action) => {
            const timeId = new Date().getTime()
            state.favoriteItems.push({
                id: timeId,
                shirtId: action.payload.shirt.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity*action.payload.shirt.price
            })
        },
        removeItemFromFavorite: (state, action) => {
            state.favoriteItems = state.favoriteItems.filter(
                favoriteItem => favoriteItem.id !== action.payload.favoriteItemId
            )
        }
    }
})

export const getTotalPrice = state => {
    return state.favorite.favoriteItems.reduce((total, favoriteItems) => {
        return favoriteItems.totalPrice+total
    }, 0)
}


export const getFavoriteItems = state => state.favorite.favoriteItems;
export const { addItemToFavorite, removeItemFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;