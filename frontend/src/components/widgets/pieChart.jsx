import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../back/api/Camembert";
import { Pie } from "react-chartjs-2";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { Box, Typography, useTheme, IconButton } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Tooltip } from "@mui/material";

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const PieChartD = () => {
  const [dailyData, setDailyData] = useState([]);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const fetchApi = async () => {
    const dailyData = await fetchDailyData();
    setDailyData(dailyData);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const piechart = dailyData[0] ? (
    <Pie
      data={{
        labels: dailyData.map((data,index) => data.year),
        datasets: [
          {
            data: dailyData.map((data,index) => data.value),
            label: "Quantité",
            fill: true,
            backgroundColor: [
              colors.blueAccent[800],
              colors.blueAccent[700],
              colors.blueAccent[600],
              colors.blueAccent[500],
              colors.blueAccent[400],
              colors.blueAccent[300],
              colors.blueAccent[200],
              colors.blueAccent[100],
            ],
          },
        ],
      }}
      height={310}
      width={310}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        borderWidth: 1,

        plugins: {
          legend: {
            position: "bottom",
            fullSize: false,
            align: "center",
            display: true,
            labels: {
              boxHeight: 10,
              boxWidth: 10,
            },
          },
        },
      }}
    />
  ) : null;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      height="100%"
    >
      <Box
        ml="10px"
        mt="5px"
        mr="1%"
        display="flex"
        justifyContent="space-between;"
      >
        <Typography variant="h3">Types d'objets perdus</Typography>
        <Tooltip title={<h2>{text}</h2>} placement="top" arrow>
          <InfoOutlinedIcon />
        </Tooltip>
      </Box>
      <Box>{piechart}</Box>
    </Box>
  );
};

export default PieChartD;
