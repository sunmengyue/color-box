import React, { Component } from "react";
import "./BoxContainer.css";
import SmallBox from "./SmallBox";

class BoxesContainer extends Component {
  static defaultProps = { numOfColors: Array.from({ length: 18 }) };
  render() {
    return (
      <div className="BoxContainer">
        {this.props.numOfColors.map((c) => {
          return <SmallBox />;
        })}
      </div>
    );
  }
}

export default BoxesContainer;
