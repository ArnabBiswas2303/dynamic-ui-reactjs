import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>DellHack2Hire</h1>
        <Link
          className="Link"
          to={{
            pathname: "/layout",
            state: this.props.data
          }}
        >
          <p style={this.showStyle}>Save</p>
        </Link>
      </div>
    );
  }
}

export default Header;
