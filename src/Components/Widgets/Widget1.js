import React, { Component } from "react";
import "./Widget1.css";
import { Doughnut } from "react-chartjs-2";

class Widget1 extends Component {
  state = {};
  data = {
    labels: ["North", "South", "East", "West"],
    datasets: [
      {
        data: [45, 54, 67, 47],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#00CC00"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#00CC00"]
      }
    ]
  };
  style = {
    width: "100vw",
    height: "100vh"
  };

  render() {
    return (
      <div className="Widget1">
        <h2>% of Consumer complaints resolved</h2>
        <Doughnut data={this.data} />
      </div>
    );
  }
}
export default Widget1;
