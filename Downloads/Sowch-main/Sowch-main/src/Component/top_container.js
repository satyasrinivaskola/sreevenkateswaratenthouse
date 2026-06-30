import {useNavigate} from'react-router-dom'
import './top_container.css' 
import logo from "./Images/image copy 2.png"

const Sowch =()=>{
const navigate=useNavigate()
return( <div className="top-conatiner">
<div className="Sowch_name_c">
<img src={logo} alt="Sowch" className="logo"/>

<h1>Grace in Every Thread, Tradition in Every Drape</h1>
<p>Premium Ethnic Wear for Women</p>
<button onClick={()=>navigate("/Collection")}>View Collection</button></div>
</div>)}

export default Sowch