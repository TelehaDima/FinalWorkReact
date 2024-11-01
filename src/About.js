import './App.css';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { useRef } from 'react';


function About() {
const containerAbout = useRef();

useGSAP(() => {
    gsap.from('h3', { delay: 2, duration: 2, y: 500, ease: "power2.InOut", opacity: 0 });
    gsap.from('p', { delay: 1, duration: 3, x: 200, ease: "power2.InOut", opacity: 0});
        })
    return (
        <div className="background">
            <div ref={containerAbout} className="contAbout">
            <h3 className='about'>Our company was founded in 2023</h3>
            
            <p className='about'>We are prompt in everything: contact us in any convenient way -
            by phone or e-mail. Specialists will calculate the cost of the order,
            agree on terms and conditions of delivery and will be ready to answer any questions regarding technologies,
            consumables, layout preparation</p>
            
            <p className='about'>Whether it's a budget order or an expensive VIP order,
            your account manager will treat it with the utmost care and oversee your order from
            billing to delivery of the finished product.</p>
            </div>
    </div>
    )
}
export default About;