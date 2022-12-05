import React, { Component } from "react";
import { fetchDailyData } from "../../back/api/BarChart";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Box, Typography, IconButton } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import axios from "axios";
import Tooltip from "@mui/material/Tooltip";

const text =
  "Nombre de minutes de retard journalieres à cause de bagages oubliés d'après une estimation douteuse de Rose et Lucas sur MongoDb";

class LineChart extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/app/get")
      .then((response) => this.setState({ data: response.data }))
      .catch((error) => console.log(error));
  }

  render() {
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
          mb="8%"
          display="flex"
          justifyContent="space-between;"
        >
          <Typography variant="h3">
            Nombre de minutes de retard journalieres à cause de bagages oubliés
          </Typography>
          <Tooltip title={<h2>{text}</h2>} placement="top" arrow>
            <InfoOutlinedIcon />
          </Tooltip>
        </Box>
        <Box>
          <Line
            data={{
              labels: this.state.data.map((item,index) => item.date.slice(0, 10)),
              datasets: [
                {
                  data: this.state.data.map((item,index) => item.duree),
                  label: "Minutes de retard",
                  fill: true,
                  backgroundColor: "rgba(65, 105, 225,0.3)",
                  borderColor: "rgba(65, 105, 225,0.3)",
                  lineTension: 0.5,
                  radius: 3,
                },
              ],
            }}
            height="240px"
            options={{
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
        </Box>
      </Box>
    );
  }
}

export default LineChart;
