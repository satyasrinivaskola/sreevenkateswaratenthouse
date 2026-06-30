import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Component/Home.js'
import Navbar from './Component/nav'

import Collection from './Component/collection'
import About from './Component/About'
import Contact from './Component/contact'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    
       <Navbar />
      
       <Routes>
<Route path="/About" element={<About/>} />
<Route path="/Collection" element={<Collection />} />
<Route path="/Contact" element={<Contact />} />
<Route path="/" element={<Home />} />
</Routes>
       </BrowserRouter>
        <footer>
         <div className="footer-bottom">
      © {new Date().getFullYear()} Srivankataramasarees. All rights reserved.
    </div></footer>
    </div>
  );
}

export default App;
