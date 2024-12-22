import { useDispatch } from "react-redux";
import { removeItemFromFavorite } from "../../redux/favoriteSlice";
import dataShirts from "../data/dataShirts";


const FavoriteItem = ({ favoriteItem }) => {
    const shirts = dataShirts.find(item => item.id === favoriteItem.shirtId)
    const dispatch = useDispatch();
    return (
        <div>
        <p className="cartFavPar">{shirts.name}</p>
        <p className="cartFavPar">{shirts.searchTerm}</p>
        <p className="cartFavPar">{favoriteItem.quantity} items</p>
        <p className="cartFavPar">Price: ${shirts.price * favoriteItem.quantity}</p>
        <span onClick={()=>dispatch(removeItemFromFavorite({favoriteItemId:favoriteItem.id}))}>   
        <img className="icon-bin" src="https://img.icons8.com/?size=100&id=8329&format=png&color=ffffff" />  
        </span>        
        </div>
        
    )
}
export default FavoriteItem;