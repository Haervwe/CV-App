import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header title="CV APP" />
        <Footer title="Made by Haervwe" />
      </div>
    );
  }
}

export default App;
