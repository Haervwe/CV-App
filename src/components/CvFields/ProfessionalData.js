import { Component } from "react";
import uniqid from "uniqid";
class ProfessionalData extends Component {
  constructor() {
    super();
    this.state = {
      ready: false,
      job: {
        charge: "",
        organization: "",
        start: "",
        end: "",
        id: uniqid(),
      },
      jobs: [],
    };
  }
  onChange = (e) => {
    const newState = this.state;
    newState.job = {
      ...newState.job,
      [e.target.name]: e.target.value,
    };

    this.setState(newState);
  };

  changeFalse() {
    let newState = this.state;
    newState = {
      ...newState,
      ready: !this.state.ready,
    };
    this.setState(newState);
    console.log(this.state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log("called");
    this.setState({
      ready: false,
      jobs: this.state.jobs.concat(this.state.job),
      job: {
        charge: "",
        organization: "",
        start: "",
        end: "",
        id: uniqid(),
      },
    });
  };

  deleteJob = (e) => {
    let newState = this.state;
    let jobs = this.state.jobs;
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].id === e) {
        jobs.splice(i, 1);
      }
    }
    newState = {
      ...newState,
      jobs: jobs,
    };
    this.setState(newState);
  };

  render() {
    const values = this.state.job;
    if (this.state.ready === false) {
      return (
        <div>
          <form onSubmit={this.onSubmit}>
            <h2>Professional Experience:</h2>
            <label htmlFor="Charge">Charge:</label>
            <input
              value={values.charge}
              onChange={this.onChange}
              name="charge"
            ></input>
            <label htmlFor="inst">Organization:</label>
            <input
              type="text"
              value={values.inst}
              onChange={this.onChange}
              name="org"
            ></input>
            <label htmlFor="start">Started:</label>
            <input
              type="date"
              value={values.start}
              onChange={this.onChange}
              name="start"
            ></input>
            <label htmlFor="end">Finished:</label>
            <input
              type="date"
              value={values.end}
              onChange={this.onChange}
              name="end"
            ></input>

            <button type="submit">Add Proffesional Experience</button>
            <button
              onClick={() => {
                this.changeFalse();
              }}
            >
              Finish Professional info.
            </button>
          </form>
          <ul>
            {this.state.jobs.map((job) => {
              return (
                <li key={job.id}>
                  <h3>{job.charge}</h3>
                  <h4>Organization:</h4>
                  <p>{job.organization}</p>

                  <h4>Period:</h4>
                  <p>
                    Started: {job.start} - Ended: {job.end}
                  </p>
                  <button
                    onClick={() => {
                      this.deleteJob(job.id);
                    }}
                  >
                    Delete Proffesional entry.
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <h2>Professional Experience:</h2>
          </div>
          <div>
            <ul>
              {this.state.jobs.map((job) => {
                return (
                  <li key={job.id}>
                    <h3>{job.charge}</h3>
                    <h4>Organization:</h4>
                    <p>{job.organization}</p>

                    <h4>Period:</h4>
                    <p>
                      Started: {job.start} - Ended: {job.end}
                    </p>
                  </li>
                );
              })}
            </ul>
            <button
              onClick={() => {
                this.changeFalse();
              }}
            >
              Modify Professional entries.
            </button>
          </div>
        </div>
      );
    }
  }
}

export default ProfessionalData;
