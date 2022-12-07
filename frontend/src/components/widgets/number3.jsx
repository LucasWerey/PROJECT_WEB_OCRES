import { Box, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React from "react";
import "./nombre.scss";
import Tooltip from "@mui/material/Tooltip";

// Composant pour l'affichage de l'API
const number1 = ({ todo }) => {
  /* Formatting the date. */
  const formatter = new Intl.DateTimeFormat("fr", {
    month: "long",
    year: "numeric",
  });
  var date = todo.fields.mois;
  var date2 = formatter.format(new Date(date));
  const text =
    "Evolution statistique de l'utilisation des APIs SNCF au fil des mois d'après les données de ressources.data.sncf.com ";
  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <Box
        ml="10px"
        mt="5px"
        mr="1%"
        mb="1%"
        display="flex"
        justifyContent="space-between;"
      >
        <Typography variant="h3">
          Utilisation de data.sncf.com en {date2}
        </Typography>
        <Tooltip title={<h2>{text}</h2>} placement="top" arrow>
          <InfoOutlinedIcon />
        </Tooltip>
      </Box>
      <Box display="flex" mt="20px" mb="6%" justifyContent="center">
        <Typography variant="h1" className="nombre">
          {todo.fields.evolution1} %
        </Typography>
      </Box>
    </Box>
  );
};
export default number1;
