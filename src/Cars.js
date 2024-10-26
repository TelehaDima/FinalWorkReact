function Cars({ prints }) {
    return (<div className="products">
        {prints.map((element => {
            const { id, name, searchTerm, price, image } = element;
            return (
                
                <div className="product-card" key={id}>
                    <img className="imageShop" src={image} width="300px" height="370px" alt="pict" />
                    <div> 
                        <h2 className="product-info">{name}</h2>
                        <h3 className="product-info">{price}</h3>
                     </div>  
                </div>
             
        )
        }))}
    </div>)
}
export default Cars