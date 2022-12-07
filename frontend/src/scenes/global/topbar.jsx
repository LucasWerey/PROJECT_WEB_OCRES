import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import React from "react";
import Grid from "@mui/material/Grid";
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

//Création de la topbar avec barre de recherche, de changement de mode et de connexion

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [open, setOpen] = React.useState(false);

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
                  <Box>
                    <Typography component="span" variant="h2">
                      Rose MARTIN
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} paddingTop="20px">
                  <Typography component="span" variant="h3">
                    E-mail :{" "}
                  </Typography>
                </Grid>
                <Grid item xs={6} paddingTop="20px">
                  <Typography component="span" variant="h3">
                    rose.martin@edu.ece.fr
                  </Typography>
                </Grid>
                <Grid item xs={6} paddingTop="10px">
                  <Typography component="span" variant="h3">
                    Date de naissance :
                  </Typography>
                </Grid>
                <Grid item xs={6} paddingTop="10px">
                  <Typography component="span" variant="h3">
                    20 Février 2001
                  </Typography>
                </Grid>
                <Grid item xs={6} paddingTop="10px">
                  <Typography component="span" variant="h3">
                    Type de compte :
                  </Typography>
                </Grid>
                <Grid item xs={6} paddingTop="10px">
                  <Typography component="span" variant="h3">
                    Administrateur
                  </Typography>
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
