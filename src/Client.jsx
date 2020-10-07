import React, { Component } from "react";

export default class Client extends Component {
  render() {
    return (
      <li>
        {this.props.details.name}{" "}
        <button onClick={() => this.props.onDelete(this.props.details.id)}>
          X
        </button>
      </li>
    );
  }
}
