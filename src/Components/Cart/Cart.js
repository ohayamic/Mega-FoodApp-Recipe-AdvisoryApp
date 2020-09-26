import React from "react";
import "./Cart.scss";
export class Cart extends React.Component {
  state = {
    showCart: true,
  };
  handleOpenCart = () => {
    this.setState({
      showCart: false,
    });
  };

  handleCloseCart = () => {
    this.setState({
      showCart: true,
    });
  };
  render() {
    return (
      <section>
        {this.state.showCart ? (
          <span onClick={this.handleOpenCart}>
            <i className="fas fa-arrow-left"></i>
          </span>
        ) : null}
        {!this.state.showCart ? (
          <article onClick={this.handleCloseCart}>
            <i className="fas fa-times-circle" />
          </article>
        ) : null}
      </section>
    );
  }
}
