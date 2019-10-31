import React, { Component } from "react";
import "./Widget6.css";

import { Polar } from "react-chartjs-2";

class Widget6 extends Component {
  state = {};
  data = {
    labels: ["QTR1", "QTR2", "QTR3", "QTR4"],
    datasets: [
      {
        data: [230, 200, 325, 400],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#00CC00"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#00CC00"]
      }
    ]
  };

  render() {
    return (
      <div className="Widget6">
        <h2>Quarterly Earnings</h2>
        <Polar data={this.data} />
      </div>
    );
  }
}
export default Widget6;
