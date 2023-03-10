import React from "react";
import {Route , Routes } from 'react-router-dom';
import './App.css';
import ProductContextProvider from "./contexts/ProductContextProvider";
import Navbar from "./Navbar";
import Basket from "./Basket";
// import CardContextProvider from "./contexts/CardContextProvider";
import Shop from "./shop/Shop";
import Home from "./Home";
import Product from "./shop/Product";
import CardContextProvider from "./contexts/CardContextProvider";

function App() {



  return (
      <>

          <ProductContextProvider>
              <CardContextProvider>
                  <Navbar />
                  <Routes>
                      <Route path="/" element={ <Home /> } />
                      <Route path="/shop" element={ <Shop /> } />
                      <Route path="/product/:id" element={ <Product /> } />
                      <Route path="/basket" element={ <Basket /> } />
                  </Routes>
              </CardContextProvider>
          </ProductContextProvider>
      </>


  );
}

export default App;
