import React from "react";

export default class Lists extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const lists = this.props.lists;
    const edit = this.props.edit;
    return (
      <>
        <ol>
          {lists.map((list, index) => {
            return (
              <li key={index} onDoubleClick={edit}>
                <div className="contents" count={index}>
                  <div>
                    <h4>{list.StartDate}</h4>
                    <h4>{list.EndDate}</h4>
                  </div>
                  <div className='step'>
                    <h2 className="textName">{list.name}</h2>
                    <p className="textArea">{list.desc}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </>
    );
  }
}
