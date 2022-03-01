import React from 'react';
import './parent.styles.css';
import { Link } from 'react-router-dom';
import { SidebarData } from './SideMenuData';

function Sidebar() {
  // const [sidebar, setSidebar] = useState(true);

  return (
    <div className='s'>
        <nav >
            {SidebarData.map((item, index) => {
              return (
                <div className= "element" >
                  <Link to={item.path}>
                    <div><div style= {{color:'black',fontSize:'100%',display:'inline-block', paddingRight: '4%'}}>{item.icon}</div>
                    <div style= {{color:'black',fontSize:'95%',display:'inline-block'}}>{item.title}</div></div>
                  </Link>
                  </div>
              );
            })}
        </nav>
    </div>
  );
}

export default Sidebar;