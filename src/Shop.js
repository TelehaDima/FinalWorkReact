import { useEffect, useState } from 'react';
import { data } from './data';
import Cars from './Cars';
import Buttons from './Buttons';
import LoaderPage from './LoaderPage';
import './App.css';


function Shop() {

  const [stateLoader, setStateLoader] = useState(true);

      useEffect(() => {
    const timer = setTimeout(() => setStateLoader(false), 1500);
    return () => clearTimeout(timer)
      }, [])
  
  const [cars, setCars] = useState(data)
  
  const chosenPrints = (searchTerm) => {
    const newPrints = data.filter(element => element.searchTerm === searchTerm);
    setCars(newPrints);
  }

  return (
    <div className='background'>
      <div >
    {stateLoader && <LoaderPage />}
      <div className='cont'>
        <h2 className='back'>Choose your print</h2>
      </div>
      <Buttons filteredPrints={chosenPrints} />
        <Cars prints={cars} />
        </div>
    </div>
  );
}

export default Shop;
