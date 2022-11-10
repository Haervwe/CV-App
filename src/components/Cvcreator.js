import { Component } from "react";
import PersonalData from "./CvFields/PersonalData";
import ProfessionalData from "./CvFields/ProfessionalData";
import EducationData from "./CvFields/EducationData";

class Cvcreator extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <PersonalData></PersonalData>
        <ProfessionalData></ProfessionalData>
        <EducationData></EducationData>
      </div>
    );
  }
}

export default Cvcreator;
