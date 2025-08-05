import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Contact from "./components/pages/Contact";
import NavbarTraxo from "./components/NavbarTraxo";
import CustomerCare from "./components/pages/CustomerCare";


function App() {
  return (
    <div>
     <NavbarTraxo/>
     
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/customercare" element={<CustomerCare/>}/>
      </Routes>
    </div>
  );
}

export default App;
