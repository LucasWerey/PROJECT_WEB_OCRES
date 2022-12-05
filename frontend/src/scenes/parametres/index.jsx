import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "../../components/header/header";
import Ajout from "./components/Ajout";
import Supr from "./components/SuprModi";
import "./index.scss";

const Para = () => {
  var date = new Date();

  var aujdF = date.toLocaleString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const [data, setData] = useState("0");
  const [valid, setValid] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
  }

  function PasBon() {
    return (
      <Typography variant="h4" marginLeft="2px" marginTop="3px" color="red">
        Veuillez saisir une valeur entière !
      </Typography>
    );
  }

  /**
   * It returns true if the string is a number, false if it's not.
   */
  function isNumber(str) {
    if (str.trim() === "") {
      setData("0");
    }

    return !isNaN(str);
  }

  /**
   * If the value is a number, then set the data to the value. Otherwise, log an error message.
   */
  function getData(value) {
    if (isNumber(value.target.value)) {
      setData(value.target.value);
      setValid(false);
    } else {
      setValid(true);
      setData("0");
    }
  }

  return (
    <Box ml="20px" mr="20px">
      <Header title="PARAMETRES" />
      {/* <div className="contour">
        <Box className="contenu">
          <Typography variant="h1">Entrez les valeurs relevées</Typography>
          <Typography variant="h3">
            Vous pouvez rentrez les valeurs relevées en terme de retard causé
            par un baggage oublié dans l'ensemble de nos gares.
          </Typography>
        </Box>
        <Box className="champs">
          <Box display="flex" flexDirection="column">
            <input
              type="text"
              placeholder="Minutes perdues"
              id="Minutes"
              className="Min"
              onChange={getData}
            />
            {valid ? <PasBon /> : null}
          </Box>
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
            Vous confirmez que le {aujdF} il y a eu {data} minutes de retard dû
            à un bagage oublié sur notre réseau.
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
        <Box className="envoi">
          <input
            type="button"
            value="Envoyer"
            className="button"
            onClick={handleClick}
          />
        </Box>
      </div> */}
      <div className="contour">
        <Ajout />
      </div>
      <div className="contour">
        <Box display="flex" justifyContent="center">
          <Supr />
        </Box>
      </div>
    </Box>
  );
};
export default Para;
