import React, { Component } from "react";

export class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="spinner-grow text-info" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );
  }
}

export default Spinner;
