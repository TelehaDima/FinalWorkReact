import { useState, useRef } from 'react';
import { data } from './data';
import Cars from './Cars';
import Buttons from './Buttons';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import './App.css';

function Shop() {

  const containerShop = useRef();

useGSAP(() => {
    gsap.from('.back,.buttonsShop', { delay: 1, duration: 2, y: -500, ease: "power2.InOut" });
        })
  
  const [cars, setCars] = useState(data)
  
  const chosenPrints = (searchTerm) => {
    const newPrints = data.filter(element => element.searchTerm === searchTerm);
    setCars(newPrints);
  }

  return (
    <div className='background'>
      <div>
      <div className='cont'>
        <h2 ref={containerShop} className='back'>Choose your print</h2>
        </div>
        
        <div ref={containerShop} className='buttonsShop'>
        <Buttons  filteredPrints={chosenPrints} />
        </div>

        <div ref={containerShop} className='carsShop'>
        <Cars prints={cars} />
        </div>

        </div>
    </div>
  );
}

export default Shop;
