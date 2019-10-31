import React, { Component } from "react";
import "./FinalLayout.css";
import Container from "./Container";

class FinalLayout extends Component {
  render() {
    console.log(this.props.location.state);
    return (
      <div className="FinalLayout">
        <h1>Your Widget Dashboard</h1>
        <div className="Display">
          {this.props.location.state.map((el, ind) => (
            <Container key={ind}>{el.name}</Container>
          ))}
        </div>
      </div>
    );
  }
}

export default FinalLayout;
