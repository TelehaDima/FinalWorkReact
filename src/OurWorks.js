import { dataourworks } from "./dataOurWorks";
import { useEffect, useState } from "react";
import LoaderPage from './LoaderPage';
import './App.css';


function OurWorks() {

const [stateLoader, setStateLoader] = useState(true);

      useEffect(() => {
    const timer = setTimeout(() => setStateLoader(false), 1500);
    return () => clearTimeout(timer)
      }, [])

  const [example, setExample] = useState(0);
    const { id, description, image } = dataourworks[example];
   
    const previousExample = () => {
        setExample((example => {
            example--;
            if (example < 0) {
                return dataourworks.length - 1;
            }
            return example;
        }))
    }

    const nextExample = () => {
        setExample((example =>{
            example++;
            if (example > dataourworks.length - 1) {
                example = 0;
            }
            return example;
        }))
    }

    return (<div>
         <div className="background">
    {stateLoader && <LoaderPage />}
        <div className="container">
            <button className="previousExample" onClick={previousExample}>Previous</button>
            <img src={image} width="400px" alt="pict" />
            <button className="nextExample" onClick={nextExample}>Next</button>
        </div>

        <div className="container">
            <p>{description}</p> 
        </div>
</div>
        

</div> 
    )
}
export default OurWorks;