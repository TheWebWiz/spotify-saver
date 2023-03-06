import React from "react";
import "./Track.css";

class Track extends React.Component {
  renderAction() {
    //Needs Removed:
    let isRemoval = true;
    return <button className="Track-Action">{isRemoval ? "-" : "+"}</button>;
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>Track Name</h3>
          <p>track artist | track album </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;
