import React, { Component } from "react";
import "./SmallBox.css";

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
    this.state = { color: "#fcbf49" };
    this.handleClick = this.handleClick.bind(this);
  }

  generateColor() {
    this.setState({
      color: this.props.colorPalettes[
        Math.floor(Math.random * this.props.colorPalettes.length)
      ],
    });
  }

  handleClick() {
    this.generateColor();
  }

  render() {
    return (
      <div
        className="SmallBox"
        onClick={this.handleClick}
        style={{ backgroundColor: "#e07a5f" }}
      ></div>
    );
  }
}

export default SmallBox;
