import React,{useState} from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar';
import CustomButton from '../../Components/custom-button/custom-button-component';
import data from './data.json';

function StudentData() {
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
                <div className = 'col1'><b>Name</b></div>
                <div className = 'col2'><b>Organisation</b></div>
                <div className = 'col3'><b>Registered on</b></div>
                <div className = 'col4'><input type="text" placeholder="Seach Name" onChange={e=>setSearchTerm(e.target.value)} /></div>
          </div>
          <hr/>
        
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
              <div className = 'col1'>{val.firstname} {val.lastname}</div>
              <div className = 'col2'>{val.organisation}</div>
              <div className = 'col3'>{val.subscribedOn}</div>
              <div className = 'col4'><CustomButton type='submit'> Details </CustomButton></div>
              <br/>
              </div>
            );
          })}
        </div>
		  </div>
    </div>
  );
}

export default StudentData;