import React, {useState, useEffect} from 'react';
import './dashboard.styles.css';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import Chart from './dchart'
import { Bar } from "react-chartjs-2";
import styled from "styled-components";
import {login, useAuth, authFetch, logout,getSessionState} from "../../../auth/index"
import NotLoggedIn from "../../../Register/Pages/notLoggedIn.jsx"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


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

  // const chartdata = async(a) =>{
  //   console.log(a)
  //   var list = []
  //   var alist = []
  //   var rlist = []
  //   for (var i = 0; i < a.length; i++) {
  //     var tid = a[i]['test_id']
  //     let p  = authFetch(`/api/test_info?test_id=${tid}`,{
  //       'methods':'GET',
  //     })
  //     .then(r => r.json())
  //     .then((r) => {
  //       return (r.name)
  //     })
  //     .catch(error => console.log(error))
  //     var tname = await p
  //     list.push(tname)
  //     alist.push(a[i]["attempted"])
  //     rlist.push(a[i]["total_registered"])
  // }

  // let wtv = [{
  //   "label": "Attempted",
  //   "data": alist
  // },
  // {
  //   "label": "Registered",
  //   "data": rlist
  // }
  // ]
  // var d = wtv.map(
  //     (i, index) => {
  //       return {
  //         label: i.label,
  //         backgroundColor: CHART_COLORS[index],
  //         data: i.data,
  //       };
  //     }
  //   );

  // var newdataset = [d];
  // var dt = newdataset.flat();
  // console.log(dt)
  // console.log(list)
  // var som = {
  //   labels: list,
  //   datasets: dt
  // };
  // setdata(som);
  // }
    
    useEffect(()=>{
      authFetch('/api/dashboard',{
        'methods':'GET',
      })
      .then(r => r.json())
      
      .then((r) => {
        console.log(r)
        // if(r.test_data !== undefined )
        // chartdata(r.test_data);
        // if(r.users_registered !== undefined )
        // setusers_registered(r.users_registered);
        // if(r.tests !== undefined )
        // settests(r.tests);
      })
      .catch(error => console.log(error))}, []);

  return (
    
    <>
     {logged&&access.type===3?
      <>
      <div>
        <Navbar />
      <Holder>
        <div>
          <Sidebar />
        </div>
        <div className='main'>
        <h1>Cognition Quotient Report (CQR)</h1>
        <div className='c'>
          <h3>Tests log</h3>
          <span>This is an overview of the tests created by the admin. It is a graphical representation of the number of users registered and the number of users of users who have attempted each of the tests.</span>
            <div style={{marginTop:"10%"}}>
            <Carousel >
              <div>
                <Chart/>
              </div>
              <div>
                <Chart/>
              </div>
            </Carousel>
            {/* <Bar data={datas} style={{width:"45vw"}} options={options} /> */}
            
            </div>
          
        </div>
        {/* <div class="users" >
          <h3>Summary</h3>
          <div class="innerdiv">
          Users registered: <br/><br/>
          <span class="display">{users_registered}</span><br/><br/>
          Tests: <br/><br/>
          <span class="display">{tests}</span><br/>
          </div>
          </div> */}
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