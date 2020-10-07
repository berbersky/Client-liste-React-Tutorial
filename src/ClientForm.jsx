import React, { Component } from "react";

export default class ClientForm extends Component {
  constructor(props) {
    super(props);
    this.state = { newClient: "" };
    this.handelSubmit = this.handelSubmit.bind(this);
    this.handeleChange = this.handeleChange.bind(this);
  }

  /**
   * HANDELE CHANGE
   * @param {Event} event
   */
  handeleChange = (event) =>
    void this.setState({ newClient: event.currentTarget.value });

  /**
   * HANDEL SUBMIT
   * @param {Event} event
   */
  //clientInput = React.createRef();
  handelSubmit = (event) => {
    event.preventDefault();
    const id = new Date().getTime();
    const name = this.state.newClient;
    this.props.onClientAdd({ id, name });
    this.setState({ newClient: "" });
  };

  newMethod() {
    return "";
  }

  render() {
    return (
      <form>
        <input
          value={this.state.newClient}
          onChange={this.handeleChange}
          type="text"
          placeholder="Ajouter un client"
        />
        <button onClick={this.handelSubmit}>Confirmer!</button>
      </form>
    );
  }
}
