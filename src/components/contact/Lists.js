import React from "react";

export default class Lists extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const list = this.props.list;
    return (
      <>
        <div className="contactContents">
          <div className="hold">
            <img src="" className="contactImg" alt="address" />
            <div className="contactText">
              <h4>{list.address}</h4>
            </div>
          </div>
          <div className="hold">
            <img src="" className="contactImg" alt="web" />
            <div className="contactText">
              <h4>{list.email}</h4>
              <h4>{list.website}</h4>
            </div>
          </div>
          <div className="hold">
            <img src="" className="contactImg" alt="contact" />
            <div className="contactText">
              <h4>{list.numOne}</h4>
              <h4>{list.numTwo}</h4>
            </div>
          </div>
        </div>
      </>
    );
  }
}
