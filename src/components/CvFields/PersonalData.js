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
  onChange = (e) => {
    let newState = this.state;
    newState = {
      ...newState,
      [e.target.name]: e.target.value,
    };
    this.setState(newState);
    //
  };
  onSubmit = (e) => {
    e.preventDefault();
    let newState = this.state;
    newState = {
      ...newState,
      ready: () => {
        return !this.state.ready;
      },
    };
    this.setState(newState);
  };

  changeFalse() {
    let newState = this.state;
    newState = {
      ...newState,
      ready: false,
    };
    this.setState(newState);
  }

  render() {
    const values = this.state;
    if (this.state.ready === false) {
      return (
        <div>
          <form onSubmit={this.onSubmit}>
            <h2>Personal Data:</h2>
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              list="name"
              value={values.name}
              onChange={this.onChange}
              name="name"
            ></input>
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="number"
              value={values.phone}
              onChange={this.onChange}
              name="phone"
            ></input>
            <label htmlFor="start">E-mail:</label>
            <input
              type="mail"
              value={values.mail}
              onChange={this.onChange}
              name="mail"
            ></input>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              value={values.end}
              onChange={this.onChange}
              name="age"
            ></input>
            <button type="submit">Add Personal Data</button>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <h2>Personal Data:</h2>
            <h3>{values.name}</h3>
            <h4>Phone Number:</h4>
            <p>{values.phone}</p>
            <h4>E-mail:</h4>
            <p>{values.mail}</p>
            <h4>Age:</h4>
            <p>{values.age}</p>
          </div>
          <button
            onClick={() => {
              this.changeFalse();
            }}
          >
            Reset PersonalData
          </button>
        </div>
      );
    }
  }
}

export default PersonalData;
