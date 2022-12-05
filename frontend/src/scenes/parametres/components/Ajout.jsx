import React, { Component } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import "./Ajout.scss";

var date = new Date();
var aujdF = date.toLocaleString("fr-FR", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

class Ajout extends Component {
  constructor() {
    super();
    this.state = {
      duree: "",
    };

    this.changeDuree = this.changeDuree.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeDuree(event) {
    this.setState({
      duree: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    const registered = {
      duree: this.state.duree,
    };

    axios
      .post("http://localhost:4000/app/post", registered)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));

    this.setState({
      duree: "",
    });
  }

  render() {
    return (
      <div className="form">
        <Box className="contenu">
          <Typography variant="h1">Entrez les valeurs relevées</Typography>
          <Typography variant="h3">
            Vous pouvez rentrez les valeurs relevées en terme de retard causé
            par un baggage oublié dans l'ensemble de nos gares.
          </Typography>
        </Box>
        <form onSubmit={this.onSubmit} className="container">
          <Box className="Champs">
            <input
              type="text"
              placeholder="Minutes perdues"
              onChange={this.changeDuree}
              value={this.state.duree}
              className="Min"
            />

            <input
              type="text"
              placeholder={aujdF}
              className="Date"
              id="date"
              disabled
            />
          </Box>
          <Box className="confirmation">
            <Typography variant="h2" width="90%">
              Vous confirmez que le {aujdF} il y a eu {this.state.duree} minutes
              de retard dû à un bagage oublié sur notre réseau.
            </Typography>
          </Box>
          <Box className="radio">
            <input
              type="checkbox"
              id="Oui"
              value="Oui"
              className="BtnRadio"
            ></input>
            <label>Confirmer</label>
          </Box>
          <Box width="100%" display="flex" justifyContent="center">
            <input type="submit" className="button" value="Ajouter" />
          </Box>
        </form>
      </div>
    );
  }
}
export default Ajout;
