import "./App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router";
import MyNavbar from "./components/navbar/navbar";
import CarouselHeader from "./components/header/header";
import BrandsArticle from "./components/article/article";
import Footer from "./components/footer/footer";
import WomenArticles from "./components/items/womenarticles";
import ShoppingCartView from "./components/shopping cart/shoppingcart";
import Checkout from "./components/checkout/checkout";
import ShowLocation from "./components/map location/location";

function App() {
  // initialize the cartItems array state
  const [cartItems, setCartItems] = useState([]);
  // initialize the item state
  const [item, setItem] = useState({});
  // initialize the total state
  const [total, setTotal] = useState(0);

  const addToCart = (shopitem) => {
    setCartItems([...cartItems, shopitem]);
    setTotal(total + shopitem.price);
    console.log(cartItems);
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <MyNavbar cartLength={cartItems.length} /> <CarouselHeader />{" "}
            <BrandsArticle /> <ShowLocation /> <Footer />
          </>
        }
      />
      <Route
        path="/womensneakers"
        element={
          <>
            <MyNavbar cartLength={cartItems.length} />
            <WomenArticles
              addToCart={addToCart}
              item={item}
              setItem={setItem}
            ></WomenArticles>
            <Footer />
          </>
        }
      />
      <Route
        path="/shoppingcart"
        element={
          <>
            <MyNavbar cartLength={cartItems.length} />
            <ShoppingCartView cart={cartItems} />
            <Footer />
          </>
        }
      />
      <Route
        path="/checkout"
        element={
          <>
            <MyNavbar cartLength={cartItems.length} />
            <Checkout cartLength={cartItems.length} total={total}></Checkout>
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
