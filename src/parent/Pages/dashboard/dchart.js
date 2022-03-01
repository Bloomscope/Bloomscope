import React from "react";
import Chart from 'chart.js/auto'
import { Bar } from "react-chartjs-2";
import datas from "./data.json"

const MyChart = () => {
  const CHART_COLORS = [
    "#0090f8",
    // "#33a6f9",
    "#66bcfb",
    // "#8ccdfc",
    "#b2defd",
    "#d9eefe"
    // "#fde76e",
    // "#fced86",
    // "#ffffb7",
    // "#fefeeb"
  ];

  const alltests = datas.result.map(
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
    labels: ["Remember", "Understand", "Apply", "Analyze", "Evaluate", "Create"],
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
      <Bar data={data} style={{width:"20vw"}} options={options} />
    </>
  );
};

export default MyChart;
