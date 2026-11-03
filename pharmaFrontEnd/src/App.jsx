import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/products";
import AboutUs from "./pages/aboutUs";
import Career from "./pages/career";
import TherapeuticAreas from "./pages/therapeuticAreas";
import Cart from "./pages/cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/career" element={<Career />} />
          <Route path="/therapeuticareas" element={<TherapeuticAreas />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
