import React from "react";
import "./style.css";
import Profile from "./components/profile/Profile";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import Accounts from "./components/accounts/Accounts";
export default class Template extends React.Component {
  constructor() {
    super();
    this.state = {
      education: "Education",
      experience: "Experience",
    };
  }
  render() {
    return (
      <>
        <Profile />
        <div className="content">
          <div className="first">
            <Education value={this.state.education} />
            <Education value={this.state.experience} />
          </div>
          <div className="first second">
            <Contact />
            <Skills />
            <Accounts />
          </div>
        </div>
      </>
    );
  }
}
