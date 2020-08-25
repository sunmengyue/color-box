import React, { Component } from "react";
import "./BoxContainer.css";
import SmallBox from "./SmallBox";
import { generateRandomColor } from "./generateRandomColor";

class BoxesContainer extends Component {
  static defaultProps = {
    numOfBoxes: 18,
  };

  render() {
    const boxes = Array.from({
      length: this.props.numOfBoxes,
    }).map((b, index) => <SmallBox key={index} />);
    return <div className="BoxContainer">{boxes}</div>;
  }
}

export default BoxesContainer;
