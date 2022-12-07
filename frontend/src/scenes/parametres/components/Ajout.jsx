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

// Composant pour l'ajout de données dans la base de données

class Ajout extends Component {
  constructor() {
    super();
    this.state = {
      duree: "",
      check: false,
    };

    this.changeDuree = this.changeDuree.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.check = this.check.bind(this);
  }

  // Fonction pour récupérer la valeur du champ de texte
  changeDuree(event) {
    this.setState({
      duree: event.target.value,
    });
  }

  // Fonction pour vérifier que l'utilisateur a bien coché la case de confirmation
  check(event) {
    if (event.target.checked) {
      this.setState({
        check: true,
      });
    } else {
      this.setState({
        check: false,
      });
    }
  }

  // Fonction pour envoyer les données au serveur
  onSubmit(event) {
    event.preventDefault();
    const registered = {
      duree: this.state.duree,
    };
    console.log(this.state.check);
    if (this.state.check === true) {
      axios
        .post("http://localhost:4000/app/post", registered)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));

      this.setState({
        duree: "",
      });
    } else if (this.state.check === false) {
      alert("Vous devez confirmer que les données sont correctes");
    }
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
              value={this.state.check}
              className="BtnRadio"
              onClick={this.check}
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
