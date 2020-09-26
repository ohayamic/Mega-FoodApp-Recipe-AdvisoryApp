import React from "react";
import "./Cart.scss";
export const Cart = ({ showCart, handleCloseCart, handleOpenCart }) => {
  return (
    <section>
      {showCart ? (
        <span onClick={handleOpenCart}>
          <i className="fas fa-shopping-cart"></i>
        </span>
      ) : (
        <span>
          <i className="fas fa-times-circle" onClick={handleCloseCart} />
        </span>
      )}
    </section>
  );
};
