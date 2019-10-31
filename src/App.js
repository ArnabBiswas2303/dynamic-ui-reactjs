import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Layout from "./Components/Layout";
import Footer from "./Components/Footer";

class App extends Component {
  state = {
    widgets: [
      { name: "Widget1", left: true },
      { name: "Widget2", left: true },
      { name: "Widget3", left: true },
      { name: "Widget4", left: false },
      { name: "Widget5", left: false },
      { name: "Widget6", left: false }
    ]
  };
  func = childData => {
    this.setState({ widgets: childData });
  };
  render() {
    return (
      <div className="App">
        <Header data={this.state.widgets}></Header>
        <Layout
          parentCallback={this.func}
          widgets={this.state.widgets}
        ></Layout>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
