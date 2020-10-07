import React, { Component } from "react";

export default class ClientForm extends Component {
  constructor(props) {
    super(props);
    this.state = { newClient: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * handle CHANGE
   * @param {Event} event
   */
  handleChange = (event) =>
    void this.setState({ newClient: event.currentTarget.value });

  /**
   * handle SUBMIT
   * @param {Event} event
   */
  //clientInput = React.createRef();
  handleSubmit = (event) => {
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
          onChange={this.handleChange}
          type="text"
          placeholder="Ajouter un client"
        />
        <button onClick={this.handleSubmit}>Confirmer!</button>
      </form>
    );
  }
}
