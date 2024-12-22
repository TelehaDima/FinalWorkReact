import dataShirts from "../data/dataShirts";
import Shirt from "./Shirt";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/shirtsSlice";

const Shirts = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    return (
        <div>
            {dataShirts
                .filter(shirt => {
                    if (selectedCategory === 'all') return true;
                    return selectedCategory === shirt.searchTerm;
            })
            .map(shirt => <Shirt shirt={shirt} />)}
        </div>
    )
}
export default Shirts;