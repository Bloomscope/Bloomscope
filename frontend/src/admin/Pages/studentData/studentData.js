import React,{useState} from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar';
import Popup from 'reactjs-popup';
import data from './data.json';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



function StudentData() {

  const dataa = [
    {
      name: 'P1',
      t1: 40,
      t2: 24,
    },
    {
      name: 'P2',
      t1: 30,
      t2: 13,
    },
    {
      name: 'P3',
      t1: 20,
      t2: 28,
    },
    {
      name: 'P4',
      t1: 27,
      t2: 39,
    },
    {
      name: 'P5',
      t1: 18,
      t2: 48,
    },
    {
      name: 'P6',
      t1: 23,
      t2: 38,
    },
  ];

  const [suggestion, setsuggestion] = useState('');
  const [searchTerm,setSearchTerm] = useState('')

  return (
    <div className='StudentData'>
      <Navbar />
      <div style = {{width:'25%', position:'fixed',zIndex:'1'}}>
        <Sidebar/>
      </div>
		  <div style = {{paddingLeft:'30%', paddingTop: '2%',paddingRight: '4%'}}>
        <div>
          <h1><b>Student Data</b></h1>

          <div className = 'row'>
                <div className = 'col1'><h3>Name</h3></div>
                <div className = 'col2'><h3>Organisation</h3></div>
                <div className = 'col3'><h3>Registered on</h3></div>
                <div className = 'col4'><input type="text" placeholder="Seach Name" onChange={e=>setSearchTerm(e.target.value)} /></div>
          </div>
          <hr/>

          <div style = {{overflowY:'scroll', height:'400px'}}>
          {data.filter((val)=>{
            if(searchTerm == ""){
              return val
            }
            else if(val.firstname.toLowerCase().includes(searchTerm.toLowerCase())||val.lastname.toLowerCase().includes(searchTerm.toLowerCase())){
              return val;
            }
          }).map((val,id)=>{
            return (
              <div className = 'row'>
                <div className = 'col1' style = {{paddingTop: '7%'}}>{val.firstname} {val.lastname}</div>
                <div className = 'col2' style = {{paddingTop: '7%'}}>{val.organisation}</div>
                <div className = 'col3' style = {{paddingTop: '7%'}}>{val.subscribedOn}</div>
                <div className = 'col4'>
                  <Popup modal trigger={<button className='custom-button'> Details </button>}>
                      <div className="popup" style = {{overflowY:'scroll'}}>
                        Id: {val.id}<br/>
                        Student name: {val.firstname} {val.lastname} <br/>
                        Contact: {val.phone}/{val.email}<hr/>
                        <ResponsiveContainer width="100%" height="60%">
                          <BarChart
                            width={500}
                            height={200}
                            data={dataa}
                            margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="t1" fill="#8884d8" />
                            <Bar dataKey="t2" fill="#82ca9d" />
                          </BarChart>
                        </ResponsiveContainer>
                        <form>
                          <label class="input-text">
                            Send Suggestion : <br/>
                            <input type="text" name="post" value={suggestion} onChange={(e)=>{setsuggestion(e.target.value)}} style={{ height:"30px"}}/>
                          </label>
                          <button className='custom-button' type='submit' style={{float:"right"}}>Send</button>
                        </form>
                      </div>
                  </Popup>
                </div>
                <br/>
              </div>
            );
          })}
          </div>
        </div>
		  </div>
    </div>
  );
}

export default StudentData;