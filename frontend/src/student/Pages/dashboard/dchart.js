import React, { useState, useEffect } from "react";
import Chart from 'chart.js/auto'
import { Bar } from "react-chartjs-2";
import datas from "./data.json"
import { useAuth, authFetch, getSessionState } from "../../../auth";

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

  const [result,setResult] = useState()

  const getRes = (inp) => {
    try{
    setResult(inp[0].result.result.param_wise_result)
    }catch(e){}
    console.log(result)
  }

useEffect(()=>{
  authFetch("/api/get_results", {
    method: "GET",
  })
  .then((r) => r.json())
  .then((r) => {
    console.log(r.results)
    getRes(r.results)
  })
},[])

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
    labels: ["Remember", "Understand", "Apply","Analyse","Evaluate","Create"],
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
