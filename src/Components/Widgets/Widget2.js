import React, { Component } from "react";
import "./Widget2.css";
import { Bar } from "react-chartjs-2";
class Widget2 extends Component {
  state = {};
  data = {
    datasets: [
      {
        data: [708, 355, 69, 550, 245, 286],
        backgroundColor: [
          "#0000CC",
          "#FF0000",
          "#FFCE56",
          "#66FF66",
          "#36A2EB",
          "#993300"
        ],
        label: "Employees per dept",
        // backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)"
      }
    ],
    labels: [
      "Engineering",
      "R&D",
      "Infrastructure",
      "Sales",
      "Management",
      "Finanace"
    ]
  };
  style = {
    width: "100vw",
    height: "100vh"
  };

  render() {
    return (
      <div className="Widget2">
        <h2>Employee per Department</h2>
        <Bar data={this.data} />
      </div>
    );
  }
}
export default Widget2;
