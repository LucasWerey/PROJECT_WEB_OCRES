import { Box, useTheme, ThemeProvider, Grid } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Header from "../../components/header/header";
import BarChart from "../../components/widgets/barChart";
import Camembert from "../../components/widgets/pieChart";
import Line from "../../components/widgets/areaChart";
import Number1 from "../../back/api/Nombre1";
import Number2 from "../../back/api/Nombre2";
import Number3 from "../../back/api/Nombre3";

const Grille = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box ml="20px" mr="20px" mb="2.5%">
      <Header title="DASHBOARD" />
      <ThemeProvider theme={theme}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} sm={6}>
            <Box
              backgroundColor={colors.primary[600]}
              boxShadow="6px 5px 5px 2px rgba(0, 0, 0, 0.25)"
              borderRadius="20px"
            >
              <Number1 isDashboard={true} />
            </Box>
          </Grid>

          <Grid item xs={12} md={4} sm={6}>
            <Box
              backgroundColor={colors.primary[600]}
              boxShadow="6px 5px 5px 2px rgba(0, 0, 0, 0.25)"
              borderRadius="20px"
            >
              <Number2 isDashboard={true} />
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              backgroundColor={colors.primary[600]}
              boxShadow="6px 5px 5px 2px rgba(0, 0, 0, 0.25)"
              borderRadius="20px"
            >
              <Number3 isDashboard={true} />
            </Box>
          </Grid>

          <Grid item xs={12} md={12}>
            <Box
              backgroundColor={colors.primary[600]}
              boxShadow="6px 5px 5px 2px rgba(0, 0, 0, 0.25)"
              borderRadius="20px"
            >
              <BarChart isDashboard={true} />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              backgroundColor={colors.primary[600]}
              boxShadow="6px 5px 5px 2px rgba(0, 0, 0, 0.25)"
              borderRadius="20px"
            >
              <Camembert isDashboard={true} />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              backgroundColor={colors.primary[600]}
              boxShadow="6px 5px 5px 2px rgba(0, 0, 0, 0.25)"
              borderRadius="20px"
            >
              <Line />
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
};
export default Grille;
