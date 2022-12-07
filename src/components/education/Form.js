import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, startDate, endDate, desc, submit, list } = this.props;
    console.log(list);
    return (
      <>
        <div className="formCover">
          <form className="form">
            <label htmlFor="name">Name of institute</label>
            <input
              type="text"
              required
              onChange={name}
              id="name"
              defaultValue={list.name}
            />
            <label htmlFor="dateStart">start date</label>
            <input type="date" required onChange={startDate} />
            <label htmlFor="dateEnd"> end date </label>
            <input type="date" required onChange={endDate} />
            <label htmlFor="desc"> Description</label>
            <textarea
              id="text"
              onChange={desc}
              defaultValue={list.desc}
            ></textarea>
            <button type="submit" id="submit" onClick={submit}>
              submit
            </button>
          </form>
        </div>
      </>
    );
  }
}
