import React, { Component } from "react";
import "./Widget3.css";

class Widget3 extends Component {
  state = {};

  render() {
    return (
      <div className="Widget3">
        <h2>Gross Profit</h2>
        <h1>$192.13M</h1>
        <table>
          <tr>
            <th>Previous</th>
            <th>Change</th>
            <th>Trend</th>
          </tr>
          <tr>
            <td>$183.61M</td>
            <td>4.43%</td>
            <td>+</td>
          </tr>
        </table>
      </div>
    );
  }
}
export default Widget3;
