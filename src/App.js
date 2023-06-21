import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cvcreator from "./components/Cvcreator";
import "./app.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <Header className="header" key="header" title="CV APP" />
        <Cvcreator className="cvCreator" key="cvcreator"></Cvcreator>
        <Footer className="footer" key="footer" title="Made by Haervwe" />
      </div>
    );
  }
}

export default App;
