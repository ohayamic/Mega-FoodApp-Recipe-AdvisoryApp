import React from "react";
import "./NavBar.scss";
export class NavBar extends React.Component {
  state = {
    isView: true,
  };

  // add a className to show and hide the navbar element
  handleClick = () => {
    const span = document.querySelector(".span");
    this.setState({
      isView: !this.state.isView,
    });
    if (this.state.isView) {
      span.classList.add("add-show");
    } else {
      span.classList.remove("add-show");
    }
  };
  render() {
    return (
      <nav className="NarBar-container">
        <div>
          <h1>OhayaMic</h1>

          <div></div>
          <span onClick={this.handleClick}>
            <i className="fas fa-align-justify" />
          </span>
        </div>
        <ul className="span">
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/">about</a>
          </li>
          <li>
            <a href="/">products</a>
          </li>
          <li>
            <a href="/">application</a>
          </li>
          <li>
            <a href="/">others</a>
          </li>
        </ul>
      </nav>
    );
  }
}
