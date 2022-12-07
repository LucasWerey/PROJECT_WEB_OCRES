import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";


// Composant pour l'affichage du titre de la page
const Header = ({ title }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="10px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Header;
