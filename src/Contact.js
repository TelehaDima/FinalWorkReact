import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { useRef } from 'react';
import './App.css';



function Contact() {

    const containerContact = useRef();

useGSAP(() => {
    gsap.from('.contact', { delay: 1, duration: 2, y: -500, ease: "power2.InOut", opacity: 0 });
        })

    return (
        <div className='background'>
    
<div>
    <h1 ref={containerContact} className='contact'>Meet Us</h1>
    <p ref={containerContact} className='contact'>✆ +48111111111</p>
    <p ref={containerContact} className='contact'>📧 example@gmail.com</p>
    <p ref={containerContact} className='contact'>🏡 Example street 8, 108 </p>
</div>
            
</div>
     
        
    )
}
export default Contact;