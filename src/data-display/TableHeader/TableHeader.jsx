import { Component } from "react";

import styles from "./TableHeader.module.css";
import TableHeaderInfo from "../TableHeaderInfo/TableHeaderInfo";
import { string } from "prop-types";

export default class TableHeader extends Component {
  constructor(props) {
    super(props);

    this.src = props.src;
    this.title = props.title;
    this.description = props.description;
  }

  render() {
    return (
      <header className={styles.header}>
        <img
          src={this.src}
          alt={this.description}
          className={styles.headerLogo}
        />
        <TableHeaderInfo title={this.title} description={this.description} />
      </header>
    );
  }
}

TableHeader.defaultProps = {
  description: "",
};

TableHeader.propTypes = {
  src: string.isRequired,
  title: string.isRequired,
  description: string,
};