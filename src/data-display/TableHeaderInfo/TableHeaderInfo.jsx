import { Component } from "react";
import styles from "./TableHeaderInfo.module.css";

export default class TableHeaderInfo extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.description = props.description;
  }

  render() {
    return (
      <div className={styles.headerInfo}>
        <h2 className={styles.title}>{this.title}</h2>
        <p>{this.description}</p>
        {!!this.description && <p>{this.description}</p>}
      </div>
    );
  }
}