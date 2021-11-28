import React from "react";
import Chart from 'chart.js/auto'
import { Bar } from "react-chartjs-2";

const datas = {
  labels: ["Parameter 1", "Parameter 2", "Parameter 3", "Parameter 4", "Parameter 5", "Parameter 6"],
  spends: [
      {
        label: "Test1",
        data: [56, 23, 55, 56, 57, 50]
      },
      {
        label: "Test2",
        data: [22, 17, 32, 47, 62, 48]
      },
      {
        label: "Test3",
        data: [46, 73, 25, 76, 27, 55]
      },
      {
        label: "Test4",
        data: [26, 40, 80, 50, 62, 58]
      }
    ]
};

const MyChart = () => {
  const CHART_COLORS = [
    "#0090f8",
    "#33a6f9",
    "#66bcfb",
    "#8ccdfc",
    "#b2defd",
    "#d9eefe"
    // "#fde76e",
    // "#fced86",
    // "#ffffb7",
    // "#fefeeb"
  ];

  const alltests = datas.spends.map(
    (i, index) => {
      return {
        label: i.label,
        backgroundColor: CHART_COLORS[index],
        data: i.data,
      };
    }
  );


  const newdataset = [alltests];
  const dt = newdataset.flat();

  const data = {
    labels: ["Parameter 1", "Parameter 2", "Parameter 3", "Parameter 4", "Parameter 5", "Parameter 6"],
    datasets: dt
  };

  const options = {
    type: 'bar',
    legend: {
      position: "top",
      labels: {
        generateLabels: function(chart) {
          return Chart.defaults.global.legend.labels.generateLabels
            .apply(this, [chart])
            .filter(function(item, i) {
              return i > 4;
            });
        },
        boxWidth: 8,
        usePointStyle: true
      }
    }
  };

  return (
    <>
      <Bar data={data} style={{width:"60vw"}} options={options} />
    </>
  );
};

export default MyChart;
