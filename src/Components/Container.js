import React, { Component } from "react";
import "./Container.css";
import Widget1 from "./Widgets/Widget1";
import Widget2 from "./Widgets/Widget2";
import Widget3 from "./Widgets/Widget3";
import Widget4 from "./Widgets/Widget4";
import Widget5 from "./Widgets/Widget5";
import Widget6 from "./Widgets/Widget6";

class Container extends Component {
  state = {
    Widgets: {
      Widget1: <Widget1></Widget1>,
      Widget2: <Widget2></Widget2>,
      Widget3: <Widget3></Widget3>,
      Widget4: <Widget4></Widget4>,
      Widget5: <Widget5></Widget5>,
      Widget6: <Widget6></Widget6>
    }
  };
  render() {
    return (
      <div className="Container">{this.state.Widgets[this.props.children]}</div>
    );
  }
}

export default Container;
