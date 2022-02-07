import React, {useState} from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import Chart from './dchart'
import styled from "styled-components";
import Popup from 'reactjs-popup';

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

function Dashboard() {
  return (
    <>
        <Navbar />
        <Holder>
        <div style={{ padding: "0 0.5rem" }}>
          <Sidebar />
        </div>
        <div style={{ paddingLeft: "6rem", paddingTop: "1rem",width:"70vw" }}>
          <h1>Dashboard</h1>
          <div style={{backgroundColor:"white",padding:"1rem",width:"47%",height:"65vh", float:"left"}}>
            <div style={{fontWeight:"bold",fontSize:"1.2rem"}}>Progress Chart</div><br/>
            <div>Each test given is examined on the basis of 6 parameters. These parameters should be worked upon separately. To understand the areas which require work, you can check your progress. This chart analysis displays your journey by comparing your results throughout. You can choose to compare test-wise by only selecting the legends you wish to view and compare.</div><br/>
            <Chart/>
          </div>
          <div style={{backgroundColor:"white",padding:"1rem",width:"44%",height:"65vh", float:"right"}}>
            <div style={{fontWeight:"bold",fontSize:"1.2rem"}}>List of tests:</div><br/>
            <div>Here are all the tests you need to study. These are arranged in chronological order. Make sure to attempt all and learn. You only get a window of time to solve a test, but you can submit a token which on approval will allow you to sit for it again.</div>
            <div style={{overflowY:"scroll"}}>

              {/*delete later from here*/}

              <div className="parent">
                <div className = 'div1'><h3>Test Name</h3></div>
                <div className = 'div2'><h3>Status</h3></div>
                <div className = 'div3' style = {{paddingTop: '7%'}}>Test 1</div>
                <div className = 'div4'>
                    <Popup modal trigger={<button className='custom-button' style= {{border:"2px solid black",backgroundColor:"#ffffff",color:"#000000"}}> Attempt </button>}>
                        <div className="popup">
                          <h3>Name: Test1</h3>
                          <hr/>
                          <b>Test rules:</b>
                          <div>
                            1. This is a multiple choice exam<br/>
                            2. Each question may not carry the same marks<br/>
                            3. Only one option is correct<br/>
                            4. Avoid guessing answers<br/>
                            5. Emphasize on Higher-Level Thinking<br/>
                            6. Test comprehension and critical thinking, not just recall<br/>
                            7. Make sure to manage your time and not miss out on questions<br/>
                            8. Keep the number of questions in mind<br/><br/>
                          </div>
                          <button className='custom-button'> Start </button>
                        </div>
                    </Popup>
                </div>
                <div className = 'div5' style = {{paddingTop: '7%'}}>Test 2</div>
                <div className = 'div6'>
                    <Popup modal trigger={<button className='custom-button' style= {{border:"2px solid black",backgroundColor:"#ffffff",color:"#000000"}}> Attempted </button>}>
                        <div className="popup" style = {{overflowY:'scroll'}}>
                          <h3>Name: Test2</h3>
                          <hr/>
                          <b>Test rules:</b>
                        </div>
                    </Popup>
                </div>
                <div className = 'div7' style = {{paddingTop: '7%'}}>Test 3</div>
                <div className = 'div8'>
                    <Popup modal trigger={<button className='custom-button'  style= {{border:"2px solid black",backgroundColor:"#ffffff",color:"#000000"}} > Missed </button>}>
                        <div className="popup" >
                          <h3>Name: Test3</h3>
                          <hr/>
                          <b>Submit a token:</b><br/>
                          Even though you have missed the exam in the given time frame, you can attend the exam by submitting a token. This is where you need to submit a reason for missing the time frame. If the token is approved, you will be notified and another time frame will be assigned to you. 
                          <br/>
                          <br/>
                          <form>
                            <input style={{height:"200px",width:"100%"}}></input>
                            <br/>
                            <button className='custom-button'> Submit </button>
                          </form>
                        </div>
                    </Popup>
                </div>
                <div className = 'div9' style = {{paddingTop: '7%'}}>Test 4</div>
                <div className = 'div10'>
                    <Popup modal trigger={<button className='custom-button' style= {{border:"2px solid black",backgroundColor:"#ffffff",color:"#000000"}}> Attempted </button>}>
                        <div className="popup" style = {{overflowY:'scroll'}}>
                          <h3>Name: Test4</h3>
                          <hr/>
                          <b>Test rules:</b>

                        </div>
                    </Popup>
                </div>
                <div className = 'div11' style = {{paddingTop: '7%'}}>Test 5</div>
                <div className = 'div12'>
                    <Popup modal trigger={<button className='custom-button' style= {{border:"2px solid black",backgroundColor:"#ffffff",color:"#000000"}}> Attempted </button>}>
                        <div className="popup" style = {{overflowY:'scroll'}}>
                          <h3>Name: Test5</h3>
                          <hr/>
                          <b>Test rules:</b>

                        </div>
                    </Popup>
                </div>
              </div>

              {/*delete till here*/}

            </div>
          </div>
        </div>
        </Holder>
    </>
  );
}

export default Dashboard;