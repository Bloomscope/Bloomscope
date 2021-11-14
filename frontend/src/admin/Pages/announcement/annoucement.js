import React from 'react';
import './styles.scss';
import { Input } from 'semantic-ui-react';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import CustomButton from '../../../Register/components/custom-button/custom-button-component';

function Announcement() {
  return (
    <div>
      <Navbar />
      <div style = {{width:'25%', position:'fixed',zIndex:'1',overflow:'auto'}}>
		<Sidebar/>
		</div>
		<div style = {{paddingLeft:'30%', paddingTop: '2%'}}>
			<h1>Announcements</h1>
      <div class="post">
      <form>
      <label>
      Title : <br/>
      <Input type="text" name="title" style={{ width: "800px" }}/>
      </label><br/>
      <label>
      Post : <br/>
      <Input type="text" name="post" style={{ width: "800px" }}/>
      </label>
      <CustomButton type='submit' style={{float:"right"}}>POST</CustomButton>
      </form>
      </div>
      <div class='log'>
      <h2>Logs</h2>
      </div>
		</div>
    </div>
  );
}

export default Announcement;