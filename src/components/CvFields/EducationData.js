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
    this.setState({ institution: { [e.target.name]: e.target.value } });
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
          <h3>Education:</h3>
          <label for="level">Grade Achieved:</label>
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
          <label for="inst">Institution:</label>
          <input
            type="text"
            value={values.inst}
            onChange={this.onChange}
            name="inst"
          ></input>
          <label for="start">Started:</label>
          <input
            type="date"
            value={values.start}
            onChange={this.onChange}
            name="start"
          ></input>
          <label for="end">Finished:</label>
          <input
            type="date"
            value={values.end}
            onChange={this.onChange}
            name="end"
          ></input>
          <label for="title">Title obtained:</label>
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
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default EducationData;
