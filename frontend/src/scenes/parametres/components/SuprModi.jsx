import React, { Component } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import "./Supprimer.scss";

// Composant pour la suppression et la modification de données dans la base de données
class Supprimer extends Component {
  constructor() {
    super();
    this.state = {
      Data: [],
      duree: "",
    };

    this.delete = this.delete.bind(this);
    this.modif = this.modif.bind(this);
    this.changeDuree = this.changeDuree.bind(this);
  }

  /**
   * When the delete button is clicked, the delete function is called, which sends a delete request to
   * the server
   */
  delete(e) {
    axios
      .delete("http://localhost:4000/app/delete/" + e.target.value)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }

  /**
   * When the user clicks on the button, the value of the input field is sent to the server, and the
   * server responds with the new value of the input field.
   */
  modif(event) {
    axios
      .put(
        "http://localhost:4000/app/put/" + event.target.value,
        this.state.duree
      )
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }

  changeDuree(event) {
    this.setState({
      duree: event.target.value,
    });
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/app/get")
      .then((response) => this.setState({ Data: response.data }))
      .catch((error) => console.log(error));
  }

  componentDidUpdate() {
    axios
      .get("http://localhost:4000/app/get")
      .then((response) => this.setState({ Data: response.data }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <Box className="TableBox">
        <table>
          {this.state.Data.reverse().map((data, index) => (
            <tbody key={data._id}>
              <tr>
                <td>{data.date.slice(0, 10)}</td>
                <td>{data.duree} minutes</td>
                <td>
                  <button
                    type="submit"
                    disabled
                    value={data._id}
                    onClick={this.modif}
                    className="ButtonBox"
                  >
                    Modifier
                  </button>
                </td>
                <td>
                  <button
                    type="submit"
                    value={data._id}
                    onClick={this.delete}
                    className="ButtonBox"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </Box>
    );
  }
}
export default Supprimer;
