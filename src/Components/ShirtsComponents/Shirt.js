import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { addItemToFavorite } from "../../redux/favoriteSlice";


const Shirt = ({ shirt }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    return (<div className="shirtMobile">
        <img className="picture" src={`./${shirt.img}.jpg`} alt="pict" />
        <span>
        <h2>{shirt.name}</h2>
        </span>
        <span>   
        <h3> ${shirt.price}</h3>
        </span>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
        <button className="btn-new-add-favorite" onClick={() => {
            dispatch(addItemToFavorite({ shirt, quantity }))
        }}>Add to favorires</button>
        <button className="btn-new-add-cart" onClick={() => {
            dispatch(addItemToCart({ shirt, quantity }));
        }}>Add to cart</button>
    </div>)
}
export default Shirt;
