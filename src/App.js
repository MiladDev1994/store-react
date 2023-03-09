import React from "react";
import {Route , Routes , Link} from 'react-router-dom';
import './App.css';
import ProductContextProvider from "./contexts/ProductContextProvider";
// import CardContextProvider from "./contexts/CardContextProvider";
import Shop from "./shop/Shop";
import Home from "./Home";
import Product from "./shop/Product";

function App() {



  return (
      <>
          <Link to="/shop">Shop</Link>
          <ProductContextProvider>
              {/*<CardContextProvider>*/}
                  <Routes>
                      <Route path="/" element={ <Home /> } />
                      <Route path="/shop" element={ <Shop /> } />
                      <Route path="/product/:id" element={ <Product /> } />
                  </Routes>
              {/*</CardContextProvider>*/}
          </ProductContextProvider>
      </>


  );
}

export default App;
