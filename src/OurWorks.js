import { dataourworks } from "./dataOurWorks";
import { useState, useRef } from "react";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import './App.css';


function OurWorks() {

const containerOurWorks = useRef();

useGSAP(() => {
    gsap.from('.previousExample', { delay: 1, duration: 2, x: -500, ease: "power2.InOut" });
    gsap.from('.nextExample', { delay: 1, duration: 2, x: 500, ease: "power2.InOut" });
    gsap.from('img', { delay: 1, duration: 2, y: 500, ease: "power2.InOut" });
    gsap.from('p', { delay: 1, duration: 2, y: -500, ease: "power2.InOut", opacity: 0 });
        })

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
        <div  className="container">
            <button ref={containerOurWorks} className="previousExample" onClick={previousExample}>Previous</button>
            <img ref={containerOurWorks} src={image} width="400px" alt="pict" />
            <button ref={containerOurWorks} className="nextExample" onClick={nextExample}>Next</button>
        </div>

        <div className="container">
            <p ref={containerOurWorks}>{description}</p> 
        </div>
</div>
        

</div> 
    )
}
export default OurWorks;