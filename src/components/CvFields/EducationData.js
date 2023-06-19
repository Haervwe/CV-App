import { Component } from "react";
import uniqid from "uniqid";

class EducationData extends Component {
  constructor() {
    super();
    this.state = {
      institution: {
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
  deleteEdu = (e) => {
    let newState = this.state;
    let institutions = this.state.institutions;
    console.log(institutions, e);
    for (let i = 0; i < institutions.length; i++) {
      if (institutions[i].id === e) {
        institutions.splice(i, 1);
      }
    }

    newState = {
      ...newState,
      institutions: institutions,
    };
    console.log(institutions);
    this.setState(newState);
  };

  render() {
    const values = this.state.institution;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h2>Education:</h2>
          <label htmlFor="level">Grade Achieved:</label>
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
          <label htmlFor="inst">Institution:</label>
          <input
            type="text"
            value={values.inst}
            onChange={this.onChange}
            name="inst"
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
          <label htmlFor="title">Title obtained:</label>
          <input
            type="text"
            value={values.title}
            onChange={this.onChange}
            name="title"
          ></input>
          <button type="submit">Add Education</button>
        </form>
        <ul>
          {this.state.institutions.map((education) => {
            return (
              <li key={education.id}>
                <h3>{education.title}</h3>
                <h4>Institution:</h4>
                <p>{education.inst}</p>
                <h4>Education Level:</h4>
                <p>{education.level}</p>
                <h4>Period:</h4>
                <p>
                  Started: {education.start} - Ended: {education.end}
                </p>
                <button
                  onClick={() => {
                    this.deleteEdu(education.id);
                  }}
                >
                  Delete education entry.
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default EducationData;
