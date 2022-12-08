import React from "react";

export default class Media extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const items = this.props.items;
    console.log(items);
    return (
      <>
        <div className="accountMedia">
          {items.map((item) => {
            return (
              <a href={item}>
                <img src="" alt="" />
              </a>
            );
          })}
        </div>
      </>
    );
  }
}
