import { useEffect, useState } from 'react';
import './App.css';
import LoaderPage from './LoaderPage';


function Contact() {

    const [stateLoader, setStateLoader] = useState(true);

      useEffect(() => {
    const timer = setTimeout(() => setStateLoader(false), 1500);
    return () => clearTimeout(timer)
  }, [])


    return (
        <div className='background'>
            {stateLoader && <LoaderPage />}
    
<div>
    <h1 className='contact'>Meet Us</h1>
    <p className='contact'>✆ +48111111111</p>
    <p className='contact'>📧 example@gmail.com</p>
    <p className='contact'>🏡 Example street 8, 108 </p>
</div>
            
</div>
     
        
    )
}
export default Contact;