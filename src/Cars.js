import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { useRef } from 'react';

function Cars({ prints }) {

const containerCars = useRef();

useGSAP(() => {
    gsap.from('.product-info', { delay: 1, duration: 2, x: -500, ease: "power2.InOut" });
    gsap.from('.imageShop', { delay: 1, duration: 2, scale: 0});
        })

    return (<div className="products">
        {prints.map((element => {
            const { id, name, searchTerm, price, image } = element;
            return (
                
                <div className="product-card" key={id}>
                    <img ref={containerCars} className="imageShop" src={image} width="300px" height="370px" alt="pict" />
                    <div> 
                        <h2 ref={containerCars} className="product-info">{name}</h2>
                        <h3 ref={containerCars} className="product-info">{price}</h3>
                     </div>  
                </div>
             
        )
        }))}
    </div>)
}
export default Cars