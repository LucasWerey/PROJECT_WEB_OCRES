import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../back/api/BarChart";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Tooltip } from "@mui/material";

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const BarChart = () => {
  const [dailyData, setDailyData] = useState([]);

  const fetchApi = async () => {
    const dailyData = await fetchDailyData();
    setDailyData(dailyData);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const barchart = dailyData[0] ? (
    <Bar
      data={{
        labels: dailyData.map((data,index) => data.year),
        datasets: [
          {
            data: dailyData.map((data,index) => data.value),
            label: "Nombre d'objets restitués",
            fill: true,
            backgroundColor: "rgba(65, 105, 225,0.3)",
            borderColor: "rgba(65, 105, 225,0.3)",
          },
        ],
      }}
      height="250%"
      options={{
        aspectRatio: 2,
        responsive: true,
        maintainAspectRatio: false,
        borderWidth: 1,
        plugins: {
          datalabels: {
            display: true,
            color: "white",
          },

          legend: {
            position: "bottom",
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false,
            },
          },

          x: {
            grid: {
              display: false,
            },
          },
        },
      }}
    />
  ) : null;

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <Box
        ml="10px"
        mt="5px"
        mr="0.5%"
        mb="6%"
        display="flex"
        justifyContent="space-between;"
      >
        <Typography variant="h3">Nombre d'objets restitués par an</Typography>
        <Tooltip title={<h2>{text}</h2>} placement="top" arrow>
          <InfoOutlinedIcon />
        </Tooltip>
      </Box>
      <Box mt="-5%">{barchart}</Box>
    </Box>
  );
};

export default BarChart;
