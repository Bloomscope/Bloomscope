import React, {useState} from 'react';
import './styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import data from './suggestions.json'

function Suggestions() {
  return (
    <>
      <div>
        <Navbar />
        <div style = {{width:'25%', position:'fixed',zIndex:'1',overflow:'auto'}}>
      <Sidebar/>
      </div>
      <div style = {{paddingLeft:'30%', paddingTop: '2%'}}>
        <h1>Suggestions</h1>
        <div class='log'>
          <h2>Suggestions for your child</h2>
            <div>
            {data.map((item,i)=>(
              <span key={i}>
              <p class="logs"><b>{item.title}</b>: {item.post}</p>
              </span>
            ))}
            </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Suggestions;