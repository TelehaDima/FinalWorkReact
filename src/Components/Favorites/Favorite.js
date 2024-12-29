import { useSelector } from "react-redux";
import FavoriteItem from "./FavoriteItem";
import { getFavoriteItems } from "../../redux/favoriteSlice";
import { getTotalPrice } from "../../redux/favoriteSlice";

const Favorite = () => {
    const favoriteItems = useSelector(getFavoriteItems);
    const totalPrice = useSelector(getTotalPrice);
    return (
        <div>
        <img className="favoriteIcon" src="https://img.icons8.com/?size=100&id=hRLYqGuFwrzX&format=png&color=000000" alt="paint" />
            <h3>TOTAL: ${totalPrice}</h3>
        {favoriteItems.map(favoriteItem => <FavoriteItem key={favoriteItem} favoriteItem={favoriteItem} />)}
        </div>
    )
}
export default Favorite;