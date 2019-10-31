import React, { Component } from "react";
import "./Layout.css";
import LeftLayout from "./LeftLayout";
import MainLayout from "./MainLayout";
import RightLayout from "./RightLayout";

class Layout extends Component {
  leftTabOpen = () => {
    document.getElementsByClassName("LeftLayout")[0].classList.toggle("expand");
  };
  rightTabOpen = () => {
    document
      .getElementsByClassName("RightLayout")[0]
      .classList.toggle("expand");
  };
  render() {
    return (
      <div className="Layout">
        <LeftLayout widgets={this.props.widgets}></LeftLayout>
        <MainLayout
          leftTabOpen={this.leftTabOpen}
          rightTabOpen={this.rightTabOpen}
          parentCallback={this.props.parentCallback}
          widgets={this.props.widgets}
        ></MainLayout>
        <RightLayout widgets={this.props.widgets}></RightLayout>
      </div>
    );
  }
}

export default Layout;
