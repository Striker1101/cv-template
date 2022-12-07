import React from "react";
import "./style.css";
import Profile from "./components/profile/Profile";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skill";
import Accounts from "./components/accounts/Accounts";
export default class Template extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Profile />
        <div className="content">
          <div className="first">
            <Education />
            <Experience />
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
