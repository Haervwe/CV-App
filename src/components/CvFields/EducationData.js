import { Component } from "react";
import uniqid from "uniqid";

class EducationData extends Component {
  constructor() {
    super();
    this.state = {
      institution: {
        ready: false,
        level: "",
        inst: "",
        completed: "",
        start: "",
        end: "",
        title: "",
        id: uniqid(),
      },
      institutions: [],
    };
  }

  onChange = (e) => {
    const newState = this.state;

    newState.institution = {
      ...newState.institution,
      [e.target.name]: e.target.value,
    };

    this.setState(newState);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      institutions: this.state.institutions.concat(this.state.institution),
      institution: {
        ready: false,
        level: "",
        inst: "",
        completed: "",
        start: "",
        end: "",
        title: "",
        id: uniqid(),
      },
    });
  };

  render() {
    const values = this.state.institution;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h2>Education:</h2>
          <label htmlfor="level">Grade Achieved:</label>
          <input
            list="Grade"
            value={values.level}
            onChange={this.onChange}
            name="level"
          ></input>
          <datalist id="Grade">
            <option value="High School"></option>
            <option value="Associates"></option>
            <option value="Bachelor"></option>
            <option value="Master"></option>
            <option value="PhD"></option>
          </datalist>
          <label htmlfor="inst">Institution:</label>
          <input
            type="text"
            value={values.inst}
            onChange={this.onChange}
            name="inst"
          ></input>
          <label htmlfor="start">Started:</label>
          <input
            type="date"
            value={values.start}
            onChange={this.onChange}
            name="start"
          ></input>
          <label htmlfor="end">Finished:</label>
          <input
            type="date"
            value={values.end}
            onChange={this.onChange}
            name="end"
          ></input>
          <label htmlfor="title">Title obtained:</label>
          <input
            type="text"
            value={values.title}
            onChange={this.onChange}
            name="title"
          ></input>
          <button type="submit">Add Education</button>
        </form>
        <div>
          {this.state.institutions.map((education) => {
            return (
              <div>
                <h3>{education.title}</h3>
                <h4>Institution:</h4>
                <p>{education.inst}</p>
                <h4>Education Level:</h4>
                <p>{education.level}</p>
                <h4>Period:</h4>
                <p>
                  Started: {education.start} - Ended: {education.end}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default EducationData;
