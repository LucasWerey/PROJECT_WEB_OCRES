import { Box, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React from "react";
import "./nombre.scss";
import Tooltip from "@mui/material/Tooltip";

// Composant pour l'affichage de l'API
const number1 = ({ todo }) => {
  let formatter = Intl.NumberFormat("en-US");

  const text =
    "Nombre de déclarations de perte sur l'année 2022 d'après les données de ressources.data.sncf.com";

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
          Nombre de déclarations de perte en {todo.facets[9].name}
        </Typography>
        <Tooltip title={<h2>{text}</h2>} placement="top" arrow>
          <InfoOutlinedIcon />
        </Tooltip>
      </Box>
      {/* <Box display="flex"> 
            <select name="annee">
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
           </select>
           </Box>  */}
      <Box display="flex" mt="20px" mb="6%" justifyContent="center">
        <Typography variant="h1" className="nombre">
          {formatter.format(todo.facets[9].count)}
        </Typography>
      </Box>
    </Box>
  );
};
export default number1;
