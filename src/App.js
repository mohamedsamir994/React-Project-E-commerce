import "./App.css";
import Mynav from "./components/Mynav";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";
import Myfoote from "./components/Myfooter";
import About from "./components/About";
function App() {
  return (
    <>
      <Mynav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
      <Myfoote />
    </>
  );
}

export default App;
