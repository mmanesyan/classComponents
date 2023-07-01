import { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);

    this.text = props.text;
  }
  componentDidMount(){
    console.log("Table component did mount")
  }
  componentDidUpdate(){
    console.log("Table component did update")
  }
  componentWillUnmount(){
    console.log("Table component will unmount")
  }

  render() {
    return (
      <div className="Table">
        <h1>Table working</h1>
      </div>
    );
  }

}

export default Table;