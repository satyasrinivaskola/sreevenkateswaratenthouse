import './contact.css'
 // import {Link} from 'react-router-dom'

import wats_scanner from './Images/Watsapp_scan.png'
import insta_scanner from './Images/insta_scanner.png'
import Myntra from './Images/Myntra.png'
import flip from './Images/flipkart.png'

import amazon from './Images/Amazon.png'

import meesho from './Images/Meesho.png'
// import logo from "./Images/image copy 2.png"


const Contact=()=>

<div className="Main-conatiner">
  
<div className="contact-card">
<h1>Get Touch</h1>
  <p className="prop">Prop: Mani Kumar yalla</p>

  <p>
    
    <a href="tel:+9154542425">📞 9154542425</a>
  </p>

  <p>
    <a href="mailto:srivenkataramasarees@gmail.com"> 📧 sriramavenkata@gmail.com</a>
  </p>

  <p>
   
    <a href="https://instagram.com/sowch_graceineverythread" >
     📸 Srivankataramasarees
    </a>
  </p>

  <p>
    
    📍Hyderabad - 500032
  </p>

  <p className="shop-title">🛍 Shop our collection also on</p>

  <div className="platforms">
    <img src={amazon} alt="Amazon" className="icon"/>
    <img src={flip} alt="Flipkart" className="icon"/>
    <img src={Myntra} alt="Myntra" className="icon"/>
    <img src={meesho} alt="Meesho" className="icon"/>
  </div>

</div>
<div className="scanner-container">
<img src={wats_scanner} alt="Watsapp Scanner" className="scanner" />
<img src={insta_scanner} alt="Insta Scanner" className="scanner" />
</div>
</div>

export default Contact