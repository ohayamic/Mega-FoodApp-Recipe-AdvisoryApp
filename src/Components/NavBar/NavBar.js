import React from "react";
import { Cart } from "../Cart/Cart";
import { Link } from "react-router-dom";
import "./NavBar.scss";
export class NavBar extends React.Component {
  state = {
    isView: true,
    showCart: true,
  };

  // add a className to show and hide the navbar element
  handleClick = () => {
    const span = document.querySelector(".span");
    this.setState({
      isView: !this.state.isView,
    });
    if (this.state.isView) {
      span.classList.add("show-narBar");
    } else {
      span.classList.remove("show-narBar");
    }
  };

  

  handleOpenCart = () => {
    this.setState({
      showCart: !this.state.showCart,
    });
  };

  handleCloseCart = () => {
    this.setState({
      showCart: !this.state.showCart,
    });
  };
  render() {
    return (
      <nav className="NarBar-container">
        <div>
          <span onClick={this.handleClick}>
            <i className="fas fa-align-justify" />
          </span>

          <h1>OhayaMic</h1>
          <div>
            <Cart
              showCart={this.state.showCart}
              handleCloseCart={this.handleCloseCart}
              handleOpenCart={this.handleOpenCart}
            />
          </div>
        </div>
        <ul className="span">
          <li onClick={this.handleClick}>
            <Link to="/" >home</Link>
          </li>
          <li onClick={this.handleClick}>
            <Link to="/about">about</Link>
          </li>
          <li onClick={this.handleClick}>
            <Link to="/rooms">rooms</Link>
          </li>
          <li onClick={this.handleClick}>
            <Link to="/apps">application</Link>
          </li>
          <li onClick={this.handleClick}>
            <Link to="/others">others</Link>
          </li>
        </ul>
        {!this.state.showCart ? (
          <section>
            <div className="navbar-cart-details"></div>
          </section>
        ) : null}
      </nav>
    );
  }
}
