import React, { useState } from "react";
import { useEffect } from "react";
import "./shoppingcart.css";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
import trashCan from "./trash-svg.svg";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function ShoppingCartView(cart) {
  const totalOfItmes = cart.cart.length;
  // setting the initial state of the total price of the cart to 0
  const [total, setTotal] = useState(0);
  // setting the cart items to the props passed to the component cart.cart
  const [cartItems, setCartItems] = useState(cart.cart);

  // useEffect hook to calculate the total price of the cart items every time the cart items state updates,
  // by iterating through the cart items and adding up their prices, and sets the total price in state.
  useEffect(() => {
    let cartTotal = 0;
    cartItems.forEach((shopitem) => {
      cartTotal += shopitem.price;
    });
    setTotal(cartTotal);
  }, [cartItems]);

  //taking the index of the item to be removed from the cart,
  //creating a new copy of the cart items state using the spread operator and removing the item at the passed index and updates the cart items state.
  const removeItem = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };
  return (
    <div className="shopping-cart-container">
      <div className="side-nav">
        <h1>Shopping Cart</h1>
        <div className="total-price">
          <h2 className="summary">Summary</h2>
          <h4>Subtotal: {total} Eur</h4>
          <h4>Number of Items: {totalOfItmes}</h4>
          <h5>Delivery fee: *Free</h5>
          <Link to="/checkout" style={{ textDecoration: "none" }}>
            <button>Proceed to checkout</button>
          </Link>
        </div>
      </div>
      <div className="cart-order-wrapper">
        <h1 className="cart-title">Complete your order</h1>
        <div className="shop-list">
          <ul>
            {cartItems.map((shopitem, index) => (
              <li
                key={index}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p>
                    <b>Name of Item:</b> {shopitem.name}
                  </p>
                  <p>
                    <b>Price:</b> {shopitem.price} Eur
                  </p>
                  <OverlayTrigger
                    placement="left"
                    delay={{ show: 250, hide: 400 }}
                    overlay={<Tooltip id="logo-1-tooltip">Remove Item</Tooltip>}
                  >
                    <ReactSVG
                      src={trashCan}
                      onClick={() => removeItem(index)}
                    ></ReactSVG>
                  </OverlayTrigger>
                </div>
                <img src={shopitem.image} alt={shopitem.name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartView;
