import { Component } from "react";
import PersonalData from "./CvFields/PersonalData";
import ProfessionalData from "./CvFields/ProfessionalData";
import EducationData from "./CvFields/EducationData";
import "./Cvcreator.scss";

class Cvcreator extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="cvCreator">
        <PersonalData className="PersonalData"></PersonalData>
        <ProfessionalData className="professionalData"></ProfessionalData>
        <EducationData className="educationData"></EducationData>
      </div>
    );
  }
}

export default Cvcreator;
