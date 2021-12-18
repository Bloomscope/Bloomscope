import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { SidebarData } from './SideMenuData';

function Sidebar() {
  return (
    <div className= "sidebar" style = {{backgroundColor: "#ffffff",paddingLeft: "12%",height:"calc(78vh)",paddingTop:"8%",boxShadow:"3px 3px 6px 5px #ccc"}}>
        <nav >
            {SidebarData.map((item, index) => {
              return (
                <div className= "element" >
                  <Link to={item.path}>
                    <div><div style= {{color:'black',fontSize:'20px',display:'inline-block', paddingRight: '4%'}}>{item.icon}</div>
                    <div style= {{color:'black',fontSize:'18px',display:'inline-block'}}>{item.title}</div></div>
                  </Link>
                  </div>
              );
            })}
        </nav>
    </div>
  );
}

export default Sidebar;