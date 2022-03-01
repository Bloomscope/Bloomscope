import React, {useState,useEffect} from 'react';
import './dash.styles.css';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import Chart from './dchart'
import { Bar } from "react-chartjs-2";
import styled from "styled-components";
import {useAuth,authFetch, getSessionState} from "../../../auth"
import NotLoggedIn from "../../../Register/Pages/notLoggedIn.jsx"

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column; 
  }
`;

// const options = {
//   type: 'bar',
//   legend: {
//     position: "top",
//     labels: {
//       generateLabels: function(chart) {
//         return Chart.defaults.global.legend.labels.generateLabels
//           .apply(this, [chart])
//           .filter(function(item, i) {
//             return i > 4;
//           });
//       },
//       boxWidth: 8,
//       usePointStyle: true
//     }
//   }
// };

function Dashboard() {
	const [logged] = useAuth();
	const access = getSessionState();
  const [schedule, setschedule] = useState([]);

  // const [datas, setdata] = useState({
  //   labels: [],
  //   datasets: []
  // });

  // const CHART_COLORS = [
  //   "#0090f8",
  //   // "#33a6f9",
  //   "#66bcfb",
  //   // "#8ccdfc",
  //   "#b2defd",
  //   // "#d9eefe"
  //   "#fde76e",
  //   "#fced86",

  //   // "#ffffb7",
  //   "#fefeeb"
  // ];
  const makelist = (a)=>{
    var list = []
    for (var i = 0; i < a.length; i++) {
      let opts = {
        'title': a[i]['name'],
        'has_attempted': a[i]['has_attempted'],
        'date': a[i]['date'],
      }
      list.push(opts)
  }
    setschedule(list);
  }

  // const res = async(a)=>{
  //   var re = []
  //   // var tl = []
  //   var d = a["results"];
  //   console.log(d)
  //   for(var i = 0 ; i < d.length; i++){
  //     var data = d[i];
  //     var results = JSON.parse(data["result"].replaceAll("'" , '"'))
  //     var p = results["param_wise_result"];
  //     var score = [];
  //     if(p["Remember"]) {
  //       score.push(100*p["Remember"]["correct_resp"]/p["Remember"]["total_questions"])
  //     }
  //     else{
  //       score.push(0)
  //     }
  //     if(p["Understand"]) {
  //       score.push(100*p["Understand"]["correct_resp"]/p["Understand"]["total_questions"])
  //     }
  //     else{
  //       score.push(0)
  //     }
  //     if(p["Apply"]) {
  //       score.push(100*p["Apply"]["correct_resp"]/p["Apply"]["total_questions"])
  //     }
  //     else{
  //       score.push(0)
  //     }
  //     if(p["Analyze"]) {
  //       score.push(100*p["Analyze"]["correct_resp"]/p["Analyze"]["total_questions"])
  //     }
  //     else{
  //       score.push(0)
  //     }
  //     if(p["Evaluate"]) {
  //       score.push(100*p["Evaluate"]["correct_resp"]/p["Evaluate"]["total_questions"])
  //     }
  //     else{
  //       score.push(0)
  //     }
  //     if(p["Create"]) {
  //       score.push(100*p["Create"]["correct_resp"]/p["Create"]["total_questions"])
  //     }
  //     else{
  //       score.push(0)
  //     }
  //     var tid = data['test_id']
  //     p  = authFetch(`/api/test_info?test_id=${tid}`,{
  //       'methods':'GET',
  //     })
  //     .then(r => r.json())
  //     .then((r) => {
  //       return (r.name)
  //     })
  //     .catch(error => console.log(error))
  //     var tname = await p
  //     // tl.push(tname)
  //     var e = {
  //       "label": tname,
  //       "data": score
  //     }
  //     re.push(e)
  //   }
  //   console.log(re)

  //   var dd = re.map(
  //     (i, index) => {
  //       return {
  //         label: i.label,
  //         backgroundColor: CHART_COLORS[index],
  //         data: i.data,
  //       };
  //     }
  //   );

  //   var newdataset = [dd];
  //   var dt = newdataset.flat();
  //   var som = {
  //     labels: ["Remember", "Understand", "Apply", "Analyze", "Evaluate", "Create"],
  //     datasets: dt
  //   };
  //   setdata(som);
  // }


  useEffect(()=>{
    
    // authFetch("/api/get_results", {
    //   methods: "GET",
    // })
    //   .then((r) => r.json())
    //   .then((r) => {
    //     // console.log(r);
    //     res(r)
    //   })
    //   .catch((error) => console.log(error));

    authFetch('/api/get_child_tests',{
      'methods':'GET',
    })
    .then(r => r.json())
    .then((r) => {
      console.log(r)
      if(r.data)
      makelist(r.data)
    })
    .catch(error => console.log(error))}, [])
  return (
    <>{logged&&access.type==2?
      <>
        <Navbar />
        <Holder>
        <div>
          <Sidebar />
        </div>
        <div className='main'>
          <h1>Cognition Quotient Report (CQR)</h1>
          <div className='colleft'>
            <div style={{fontWeight:"bold",fontSize:"1.2rem"}}>Progress Chart</div><br/>
            <div>Each test given is examined on the basis of 6 parameters. These parameters should be worked upon separately. To understand the areas which require work, you can check your progress. This chart analysis displays your journey by comparing your results throughout. You can choose to compare test-wise by only selecting the legends you wish to view and compare.</div><br/>
            {/* <Bar data={datas} style={{width:"45vw"}} options={options} /> */}
          <Chart/>
          </div>

          <div className='colright'>
            <div style={{fontWeight:"bold",fontSize:"1.2rem"}}>List of tests:</div><br/>
            <div>Here are all the tests you need to study. These are arranged in chronological order. Make sure to attempt all and learn. You only get a window of time to solve a test, but you can submit a token which on approval will allow you to sit for it again.</div>
            <div style={{overflowY:"scroll"}}>
            <div style={{width:"44%",float:"left"}}><h3>Test Name</h3></div>
              <div style={{width:"44%",float:"right"}}><h3>Status</h3></div>
            {schedule.map((item,i)=>(
              <span key={i}>
              <div style={{height:"120px"}}>
              <div style={{padding:"10px 10px",width:"44%",float:"left"}}>{item.title}</div>
              <div style={{width:"44%",float:"right"}}>
                {(item.date == -1) ?
                <><button className='custom-button' style= {{backgroundColor:"#000000"}}> Yet to give </button></>
                :(item.date == 0 && item.has_attempted == 'True')? <><button className='custom-button' style= {{backgroundColor:"#000000"}}> Attempted </button></> 
                : (item.date == 0 && item.has_attempted == 'False')? <><button  className='custom-button' style= {{backgroundColor:"#000000"}}> Can attempt </button> </> 
                : (item.date == 1 && item.has_attempted == 'True')? <><button className='custom-button' style= {{backgroundColor:"#000000"}}> Attempted </button></> 
                : (item.date == 1 && item.has_attempted == 'False')? <><button className='custom-button' style= {{backgroundColor:"#000000"}}> Missed </button></>:<></> }
              </div></div>
              </span>
            ))}
            </div>
          </div>

        </div>
        </Holder>
        </>
	:
	<>
    <NotLoggedIn/>
	</>}</>
  );
}

export default Dashboard;