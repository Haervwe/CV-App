import { Component } from "react";

class ProfessionalData extends Component {
  constructor() {
    super();
    this.state = {
      jobs: [
        {
          ready: false,
          level: "",
          institution: "",
          completed: "",
          start: "",
          end: "",
          title: "",
        },
      ],
    };
  }

  render() {
    return this.state.jobs.map((job) => {
      if (job.ready === true) {
        return <div></div>;
      } else {
        return <div></div>;
      }
    });
  }
}

export default ProfessionalData;
