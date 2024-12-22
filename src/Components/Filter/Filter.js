import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/shirtsSlice";


const Filter = ({ searchTerm }) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);
    return (<div>
        <p onClick={()=>{dispatch(filterCategory(searchTerm))}} className={selectedCategory === searchTerm ? 'categoryButtonSelected':'categoryButton'}>{searchTerm}</p>
    </div>)
}
export default Filter;