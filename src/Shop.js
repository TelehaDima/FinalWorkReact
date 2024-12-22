import Cart from "./Components/Cart/Cart";
import AllCategories from "./Components/Filter/AllCategories";
import Shirts from "./Components/ShirtsComponents/Shirts";
import './App.css';
import Favorite from "./Components/Favorites/Favorite";
import { useRef } from "react";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";

function AppNew() {
    const containerShop = useRef();
    
    useGSAP(() => {
    gsap.from('.AppNew', { delay: 1, duration: 2, y: 500, ease: "power2.InOut" });
        })

    return (
        <div>
        <h2 className="shopnewh2">Choose your print</h2>
            <div ref={containerShop} className="AppNew">
                
        <div className="block-category">
        <AllCategories/>            
        </div>

        <div className="block">
        <Favorite/>
        </div>

        <div className="block">
        <Cart />
        </div>

        <div className="block">
        <Shirts /> 
        </div>
        </div>
</div>

            )
}
export default AppNew;