import { Box } from "@mui/system";
import Header from "../../components/header/header";
import "./aide.scss";
import { Typography, useTheme, ThemeProvider } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import Button from "../../controleurs/aide/button";

const Aide = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
  }
  return (
    <Box ml="20px">
      <Box display="flex"></Box>
      <Header title="AIDE" />

      <div className="form1">
        <h1>Demande d'aide</h1>
        <Button onClick={handleClick} />
      </div>
    </Box>
  );
};

export default Aide;
