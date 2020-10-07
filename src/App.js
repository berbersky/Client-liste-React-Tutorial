import React from "react";
import ReactDOM from "react-dom";
import Client from "./Client";
import ClientForm from "./ClientForm";

import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.title = "Liste de clients";
    this.state = {
      //compteur: 0,
      clients: [
        { id: 1, name: "Berrekail sofiane" },
        { id: 2, name: "Bessalem Mourad" },
        { id: 3, name: "Bouzfrane Ahmed" }
      ]
    };
    this.handelAddClient = this.handelAddClient.bind(this);
    this.handeleDelete = this.handeleDelete.bind(this);
  }

  /**
   * Handel add client
   * @param {, id, name} client
   */

  handelAddClient = (client) => {
    const { id, name } = client;
    if (name === "") {
      alert("Nom du client requis!");
      return;
    }
    const clients = [...this.state.clients];
    clients.push({ id, name });
    this.setState({ clients });
  };

  /**
   * HANDELE DELETE
   * @param {int} id
   */
  handeleDelete = (id) => {
    const clients = [...this.state.clients];
    const index = clients.findIndex((client) => client.id === id);
    clients.splice(index, 1);
    this.setState({ clients });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.title}</h1>
        <ClientForm onClientAdd={this.handelAddClient} />
        <ul>
          <li>
            Nom du Client: <button></button>
          </li>
          {this.state.clients.map((client) => {
            return (
              <Client
                key={client.id}
                details={client}
                onDelete={this.handeleDelete}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
