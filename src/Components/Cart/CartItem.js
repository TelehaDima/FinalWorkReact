import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";
import dataShirts from "../data/dataShirts";

const CartItem = ({ cartItem }) => {
    const shirts = dataShirts.find(item => item.id === cartItem.shirtId)
    const dispatch = useDispatch()
    return (
        <div>
        <p className="cartFavPar">{shirts.name}</p>
        <p className="cartFavPar">{shirts.searchTerm}</p>
        <p className="cartFavPar">{cartItem.quantity} items</p>
        <p className="cartFavPar">Price: ${shirts.price * cartItem.quantity}</p> 
        <span onClick={()=>dispatch(removeItemFromCart({cartItemId:cartItem.id}))}> 
        <img className="icon-bin" src="https://img.icons8.com/?size=100&id=8329&format=png&color=ffffff"/>        
        </span>
            
        </div>
    )
}
export default CartItem;