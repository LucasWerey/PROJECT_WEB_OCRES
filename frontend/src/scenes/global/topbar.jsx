import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import React from "react";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Dialog from "@mui/material/Dialog";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [open, setOpen] = React.useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  return (
    <Box display="flex" justifyContent="flex-end" p={2}>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="40px"
        width="100%"
      >
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
        <InputBase placeholder="Recherche" fullWidth={true} />
      </Box>

      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Box>

      <Box display="flex">
        <IconButton onClick={handleClickToOpen}>
          <AccountCircleOutlinedIcon />
        </IconButton>

        <Dialog
          open={open}
          onClose={handleToClose}
          PaperProps={{
            style: { borderRadius: 30 },
          }}
        >
          <DialogTitle display="flex" justifyContent="center">
            <img src={`../../pictures/homme.png`} width="20%" alt="icone_uti" />
          </DialogTitle>

          <DialogContent>
            <DialogContentText>
              <Grid container>
                <Grid item xs={12} display="flex" justifyContent="center">
                  <Box marginTop="-20px">
                    <h1>Rose MARTIN</h1>
                  </Box>
                </Grid>
                <Grid item xs={6} paddingTop="20px">
                  <h2>E-mail : </h2>
                </Grid>
                <Grid item xs={6} paddingTop="20px">
                  <h2>rose.martin@edu.ece.fr</h2>
                </Grid>
                <Grid item xs={6} paddingTop="10px">
                  <h2>Date de naissance :</h2>
                </Grid>
                <Grid item xs={6} paddingTop="10px">
                  <h2>20 Février 2001</h2>
                </Grid>
                <Grid item xs={6} paddingTop="10px">
                  <h2>Type de compte :</h2>
                </Grid>
                <Grid item xs={6} paddingTop="10px">
                  <h2>Administrateur</h2>
                </Grid>
              </Grid>
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleToClose} autoFocus color="primary">
              Fermer
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default Topbar;
