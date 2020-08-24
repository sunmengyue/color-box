import React, { Component } from "react";
import "./BoxContainer.css";
import SmallBox from "./SmallBox";

class BoxesContainer extends Component {
  static defaultProps = { numOfBoxes: 18 };
  render() {
    const boxes = Array.from({ length: this.props.numOfBoxes }).map((b) => (
      <SmallBox />
    ));
    return <div className="BoxContainer">{boxes}</div>;
  }
}

export default BoxesContainer;
