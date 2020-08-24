import React, { Component } from "react";
import "./BoxContainer.css";
import SmallBox from "./SmallBox";

class BoxesContainer extends Component {
  render() {
    return (
      <div className="BoxContainer">
        <SmallBox />
      </div>
    );
  }
}

export default BoxesContainer;
