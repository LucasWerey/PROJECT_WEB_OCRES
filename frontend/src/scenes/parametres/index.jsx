import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/header/header";
import Ajout from "./components/Ajout";
import Supr from "./components/SuprModi";
import "./para.scss";

// Composant pour l'affichage des paramètres
const Para = () => {
  return (
    <Box ml="20px" mr="20px">
      <Header title="PARAMETRES" />
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
