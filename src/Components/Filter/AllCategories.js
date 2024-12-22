import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div>
            {['all', 'cars', 'motorcycles', 'pickups'].
                map(searchTerm => <Filter searchTerm={searchTerm}/>
            )}
        
        </div>
    )
}
export default AllCategories;