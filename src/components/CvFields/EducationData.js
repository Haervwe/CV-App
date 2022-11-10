import { Component } from "react";
import uniqid from "uniqid";

class EducationData extends Component {
  constructor() {
    super();
    this.state = {
      institutions: [
        {
          ready: false,
          level: "",
          institution: "",
          completed: "",
          start: "",
          end: "",
          title: "",
          id: uniqid(),
        },
      ],
    };
  }

  render() {
    return this.state.institutions.map((Education) => {
      if (Education.ready === true) {
        return <div></div>;
      } else {
        return <div></div>;
      }
    });
  }
}

export default EducationData;
