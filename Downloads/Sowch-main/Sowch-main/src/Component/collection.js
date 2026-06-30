import './collection.css'
import kurta from "./Images/kurta_I.png"
import saree from "./Images/Saree_I.png"
import arrival from "./Images/NewArrival.png"
import p_1 from "./Images/p_1.png";
import p_2 from "./Images/p_2.png";
import p_3 from "./Images/p_3.png";
import p_4 from "./Images/p_4.png";


const Collection=()=>{
const collection_items=[{name:"Sarees",url:saree},
{name:"Kurtas",url:kurta},
{name:"Sarees",url:arrival}]

const products=[{label:"Merron Kurta set",cost:"₹699",url:p_1},
{label:"Red three piece set",cost:"₹693",url:p_2},
{label:"Women Kurta set",cost:"₹703",url:p_3},
{label:"White occasional kurta",cost:"₹697",url:p_4}]

return(
<div className="collection-container">
<h1>Shop by Category</h1>

<ul className="collection_c">
{collection_items.map(items=><div className="list-container"
><li><img src={items.url} alt={items.name} className="item"/></li>

<li>{items.name}</li></div>)}</ul>
<h1>Featured Products</h1>
<ul className="collection_c">

{products.map(product=><div className="list-container"
><li><img src={product.url} alt={product.label} className="item"/></li>
<li>{product.label}</li>
<li>{product.cost}</li>
<li><button type="button" disabled>View Details</button></li></div>)}</ul>



</div>
)}

export default Collection