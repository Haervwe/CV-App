import { Component } from "react";

class PersonalData extends Component {
  constructor() {
    super();
    this.state = {
      ready: false,
      name: "",
      phone: "",
      mail: "",
      age: "",
    };
  }

  render() {
    if (this.state.ready === false) {
      return <div></div>;
    } else {
      return <div></div>;
    }
  }
}

export default PersonalData;
