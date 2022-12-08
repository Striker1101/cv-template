import React from "react";
import Media from "./Media";
import Form from "./Form";

export default class Accounts extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
      media: "",
      items: []
    };
    this.display = this.display.bind(this);
    this.handleChangeMedia = this.handleChangeMedia.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  display() {
    this.setState({
      toggle: !this.state.toggle
    });
  }
  handleChangeMedia(e) {
    this.setState({
      media: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log("boom");
    this.setState({
      items: this.state.items.concat(this.state.media),
      media: ""
    });
  }
  render() {
    return (
      <>
        <hr onClick={this.display}></hr>
        <Media items={this.state.items} />
        {this.state.toggle && (
          <Form
            media={this.state.media}
            submit={this.submit}
            handle={this.handleChangeMedia}
          />
        )}
      </>
    );
  }
}
