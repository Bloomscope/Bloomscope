import React,{useState} from 'react';
import './styles.scss';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import Parameter from '../../Components/parameters/parameter';
import TabButton from '../../../Register/components/TabButton/TabButton';
import {FaPlus} from "react-icons/fa";
import styled from "styled-components";

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;


function TestCreation() {
  const [openbutton, setopenbutton]=useState(false);
  const options = [
  '1', '2', '3', '4', '5', '6','7','8','9', '10','11','12','13','14','15','16',
  '17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'
  ];
  const defaultOption = options[0]
  return (
    <>
      <Navbar />
      <Holder>
        <div style={{ padding: "0 0.5rem" }}>
          <Sidebar />
        </div>
        <div style={{ paddingLeft: "6rem", paddingTop: "1rem" }}>
        <h1>Test Creation</h1>
        <div class="box1">
          <span>Start Day Number
          <Dropdown options={options}  value={defaultOption} placeholder="Select an option" />
          </span>
          <span>End Day Number
          <Dropdown options={options}  value={defaultOption} placeholder="Select an option" style={{width:"20px"}} />
          </span>
          <div>
            <TabButton onClick={() => setopenbutton(!openbutton)}>
              <FaPlus className="FaUserGraduate" />
              Add Parameter
            </TabButton>
            <Parameter view={openbutton}/>
          </div>
        </div>
      </div>
    </Holder></>
  );
}

export default TestCreation;