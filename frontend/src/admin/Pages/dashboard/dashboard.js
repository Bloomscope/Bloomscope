import React, {useState, useEffect} from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import CustomButton from '../../../Register/components/custom-button/custom-button-component';
// import data from './announcements.json'
import Chart from 'chart.js/auto'
import { Bar } from "react-chartjs-2";
import styled from "styled-components";
import {login, useAuth, authFetch, logout,getSessionState} from "../../../auth/index"
import NotLoggedIn from "../../../Register/Pages/notLoggedIn.jsx"

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

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


function ADashboard() {

	const [logged] = useAuth();
	const access = getSessionState();
  const [testData, settestData] = useState([]);
  const [users_registered, setusers_registered] = useState('');
  const [tests, settests] = useState('');
  const [datas, setdata] = useState({
    labels: [],
    datasets: []
  });

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

  const chartdata = async(a) =>{
    console.log(a)
    var list = []
    var alist = []
    var rlist = []
    for (var i = 0; i < a.length; i++) {
      var tid = a[i]['test_id']
      let p  = authFetch(`/api/test_info?test_id=${tid}`,{
        'methods':'GET',
      })
      .then(r => r.json())
      .then((r) => {
        return (r.name)
      })
      .catch(error => console.log(error))
      var tname = await p
      list.push(tname)
      alist.push(a[i]["attempted"])
      rlist.push(a[i]["total_registered"])
  }

  let wtv = [{
    "label": "Attempted",
    "data": alist
  },
  {
    "label": "Registered",
    "data": rlist
  }
  ]
  var d = wtv.map(
      (i, index) => {
        return {
          label: i.label,
          backgroundColor: CHART_COLORS[index],
          data: i.data,
        };
      }
    );

    var newdataset = [d];
  var dt = newdataset.flat();
  console.log(dt)
  console.log(list)
  var som = {
    labels: list,
    datasets: dt
  };
  setdata(som);
  }
    
    useEffect(()=>{
      authFetch('/api/dashboard',{
        'methods':'GET',
      })
      .then(r => r.json())
      .then((r) => {
        if(r.test_data !== undefined )
        chartdata(r.test_data);
        // settestData(r.test_data);
        if(r.users_registered !== undefined )
        setusers_registered(r.users_registered);
        if(r.tests !== undefined )
        settests(r.tests);
      })
      .catch(error => console.log(error))})

  return (
    
    <>
     {logged&&access.type===3?
      <>
      <div>
        <Navbar />
      <Holder>
        <div style={{ padding: "0 0.5rem" }}>
          <Sidebar />
        </div>
        <div style={{ paddingLeft: "6rem", paddingTop: "1rem",paddingRight:"2.2rem" }}>
        <h1>Dashboard</h1>
        <div style = {{float:"left",width:"400px",height:"60vh",backgroundColor:"white", padding:"1.8rem", marginRight:"10px"}}>
          <h3>Tests log:</h3>
            <div style={{overflowY:"scroll",height:"55vh"}}>
            <Bar data={datas} style={{width:"60vw"}} options={options} />
            </div>
          
        </div>
        <div style = {{float:"right",width:"420px",height:"60vh",backgroundColor:"white", padding:"1.8rem"}}>
          Users registered: {users_registered}<br/>
          Tests: {tests}
        </div>
      </div>
      </Holder>
      </div>
      </>:
	 <>
     <NotLoggedIn/>
	 </>}</>
  );
}

export default ADashboard;