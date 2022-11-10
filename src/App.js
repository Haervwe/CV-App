import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cvcreator from "./components/Cvcreator";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header key="header" title="CV APP" />
        <Cvcreator key="cvcreator"></Cvcreator>
        <Footer key="footer" title="Made by Haervwe" />
      </div>
    );
  }
}

export default App;
