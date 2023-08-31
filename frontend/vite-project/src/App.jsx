import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Home/Homepage";
import Product from "./Pages/Product/Product";
import { CartContainer } from "./context/Cartcontext";
import Cart from "./Pages/Cart/Cart";
import Addprod from "./Pages/AddProduct/Addprod";
import Navbar from "./Pages/Home/Navbar";
import { ProductContainer } from "./context/ProductContext";
import LoginPage from "./Components/Login/LoginPage";
import Editprod from "./Pages/EditProduct/Editprod";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContainer>
          <ProductContainer>
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/Products/:id" element={<Product />} />
              <Route path="/Products/edit/:id" element={<Editprod />} />
              <Route path="/Products/Cart" element={<Cart />} />
              <Route path="/addproduct" element={<Addprod />} />
              <Route path="/login" element={<LoginPage />} />

            </Routes>
          </ProductContainer>
        </CartContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
