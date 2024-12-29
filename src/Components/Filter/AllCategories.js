import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div>
            {['all', 'cars', 'motorcycles', 'pickups'].
                map(searchTerm => <Filter key={searchTerm} searchTerm={searchTerm}/>
            )}
        
        </div>
    )
}
export default AllCategories;