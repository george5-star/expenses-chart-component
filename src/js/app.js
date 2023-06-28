"use strict";

const ctx = document.getElementById("myChart");

const softRed = "hsl(10, 79%, 65%)";
const cyan = "hsl(186, 34%, 60%)";
const darkBrown = "hsl(25, 47%, 15%)";

const hoveredSoftRed = "hsl(10, 79%, 85%)";
const hoveredCyan = "hsl(186, 34%, 80%)";

const data = {
  labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  datasets: [
    {
      label: "$",
      data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
      borderWidth: 1,
      backgroundColor: [
        softRed,
        softRed,
        cyan,
        softRed,
        softRed,
        softRed,
        softRed,
      ],
      barPercentage: 0.5,
      barThickness: 40,
      borderRadius: 5,
      hoverBackgroundColor: [
        hoveredSoftRed,
        hoveredSoftRed,
        hoveredCyan,
        hoveredSoftRed,
        hoveredSoftRed,
        hoveredSoftRed,
        hoveredSoftRed,
      ],
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    // layout: {
    //   padding: {
    //     left: 50,
    //   },
    // },
    scales: {
      x: {
        grid: {
          display: false,
          offset: true,
        },
      },
      y: {
        display: false,
        grid: {
          offset: true,
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        caretSize: 0,
        backgroundColor: darkBrown,
        displayColors: false,
        padding: 12,
        xAlign: "center",
        yAlign: "bottom",
        callbacks: {
          title: (data) => {
            return data[0].parsed.x === "";
          },
          label: (data) => {
            return `$${data.parsed.y}`;
          },
        },
      },
    },
  },
};

new Chart(ctx, config);
