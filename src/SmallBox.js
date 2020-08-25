import React, { Component } from "react";
import "./SmallBox.css";
import { generateRandomColor } from "./generateRandomColor";

class SmallBox extends Component {
  static defaultProps = {
    colorPalettes: [
      "#e63946",
      "#a8dadc",
      "#457b9d",
      "#1d3557",
      "#264653",
      "#2a9d8f",
      "#f4a261",
      "#e76f51",
      "#e9c46a",
      "#ef476f",
      "#06d6a0",
      "#118ab2",
      "#073b4c",
      "#e07a5f",
      "#fcbf49",
    ],
  };

  constructor(props) {
    super(props);
    this.state = { color: "#ef476f" };
    this.handleClick = this.handleClick.bind(this);
  }

  changeColor() {
    this.setState({
      color: generateRandomColor(this.props.colorPalettes),
    });
  }

  handleClick() {
    this.changeColor();
  }

  render() {
    return (
      <div
        className="SmallBox"
        style={{
          backgroundColor: `${generateRandomColor(this.props.colorPalettes)}`,
        }}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default SmallBox;
