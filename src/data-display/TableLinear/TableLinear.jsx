import React, { Component } from 'react'


export default class TableLinear extends Component {
    constructor(props){
        super(props)
        this.props=props
    }
  render() {
    const linerConstants = ["mp", "w", "d", "l", "gf", "ga", "gd", "pts"];
     const TableLinerTitle=React.createElement("h4", { className: "title" }, "Club");
      const TableLinerContents = linerConstants.map((constant) => {
    return React.createElement("h4", { class: "title" }, constant.toUpperCase());
  });
    const TableLinerContentsSection = React.createElement(
    "div",
    {},
    ...TableLinerContents
  );
    
  return React.createElement(
    "div",
    { class: "liner-section" },
    TableLinerTitle,
    TableLinerContentsSection
  );
}
  }
