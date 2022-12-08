import React from "react";
import "./style.css";
import "./Modal.css";
import Profile from "./components/profile/Profile.js";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import Accounts from "./components/accounts/Accounts";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
export default class Template extends React.Component {
  constructor() {
    super();
    this.state = {
      education: "Education",
      experience: "Experience",
      modal: false,
    };
    this.generate = this.generate.bind(this);
    this.clear = this.clear.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  clear() {}
  toggle() {
    this.setState({
      education: "Education",
      experience: "Experience",
      modal: !this.state.modal,
    });
  }
  generate = () => {
    document.querySelector(".generate").style.cssText = "display: none";
    const input = document.getElementById("container");
    html2canvas(input, {
      logging: true,
      letterRendering: 0,
      useCORS: true,
    }).then((canvas) => {
      const imgWidth = 208;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("img/jpeg");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("generated.pdf");
    });
  };
  render() {
    return (
      <div id="container">
        <Profile />
        <div className="content">
          <div className="first">
            <Education value={this.state.education} />
            <Education value={this.state.experience} />
          </div>
          <div className="second">
            <div>
              <Contact />
              <Skills />
            </div>
            <div>
              <Accounts />
            </div>
            <div>
              {" "}
              <button onClick={this.generate} className="generate">
                Generate pdf
              </button>
              <button onClick={this.toggle}>Clear CV</button>
              {this.state.modal && (
                <div className="modal">
                  <div className="overlay" onClick={this.toggle}>
                    <div className="modal-content">
                      <h2>
                        hello dear, do you wish to clear
                        <p>this cant be reverted</p>
                      </h2>
                      <button className="close-modal" onClick={this.toggle}>
                        close
                      </button>
                      <button onClick={this.clear}>Clear</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
