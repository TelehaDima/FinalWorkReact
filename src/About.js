import { useEffect, useState } from "react";
import './App.css';
import LoaderPage from './LoaderPage';

function About() {

     const [stateLoader, setStateLoader] = useState(true);

      useEffect(() => {
    const timer = setTimeout(() => setStateLoader(false), 1500);
    return () => clearTimeout(timer)
      }, [])
    

    return (
    <div className="background">
    {stateLoader && <LoaderPage />}
            <h3 className='about'>Our company was founded in 2023</h3>
            
            <p className='about'>We are prompt in everything: contact us in any convenient way -
            by phone or e-mail. Specialists will calculate the cost of the order,
            agree on terms and conditions of delivery and will be ready to answer any questions regarding technologies,
            consumables, layout preparation</p>
            
            <p className='about'>Whether it's a budget order or an expensive VIP order,
            your account manager will treat it with the utmost care and oversee your order from
            billing to delivery of the finished product.</p>
            
    </div>
    )
}
export default About;