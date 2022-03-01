import React, {useState,useEffect} from 'react';
import './token.styles.scss';
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'
import styled from "styled-components";
import CustomButton from '../../../Register/components/custom-button/custom-button-component';
import {login,authFetch, useAuth, logout,getSessionState} from "../../../auth"
import NotLoggedIn from "../../../Register/Pages/notLoggedIn.jsx"

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

function Token() {
  const [logged] = useAuth();
	const access = getSessionState();
  const [tokens, settokens] = useState([]);
  
  const makelist = async(a)=>{
    console.log(a)
    var list = []
    for (var i = 0; i < a.length; i++) {
      if(a[i]['status'] != "approved"){
      var uid = a[i]['user_id']
      let p  = authFetch(`/api/get_user_info?uid=${uid}`,{
        'methods':'GET',
      })
      .then(r => r.json())
      .then((r) => {
        return (r.fname + " " + r.lname)
      })
      .catch(error => console.log(error))
      var uname = await p
      
      var tid = a[i]['test_id']
      p  = authFetch(`/api/test_info?test_id=${tid}`,{
        'methods':'GET',
      })
      .then(r => r.json())
      .then((r) => {
        return (r.name)
      })
      .catch(error => console.log(error))
      var tname = await p

      let opts = {
        'user_id': a[i]['user_id'],
        'created_on': a[i]['created_on'],
        'reasonsss': a[i]['reason'],
        'test_id': a[i]['test_id'],
        'status': a[i]['status'],
        'uname': uname,
        'tname': tname
      }
      list.push(opts)
  }
  console.log(list)
  settokens(list);
}
  }

  useEffect(()=>{
    authFetch('/api/get_all_tokens',{
      'methods':'GET',
    })
    .then(r => r.json())
    .then((r) => {
      console.log(r)
      if(r.tokens !== undefined )
      makelist(r.tokens);
    })
    .catch(error => console.log(error))}, []);

    const approve = (e,test_id,user_id)=>{
      e.preventDefault()
      console.log("You pressed button")
      let opts = {
        'user_id': user_id,
        'test_id': test_id,
        'action': "approved",
      }
      console.log(opts)
      authFetch('/api/update_token', {
        method: 'post',
        body: JSON.stringify(opts),
      }).then(r => r.json())
        .then(r => {
          if(r.status == 'success')
          console.log(r)
          else
          console.log(r)
        })
        .catch(error => console.log(error))
      return false;
    }
    
    const all = (e)=>{
      e.preventDefault()
      console.log("You pressed button")
      let opts = {
        'action': "accepted"
      }
      console.log(opts)
      authFetch('/api/update_all', {
        method: 'post',
        body: JSON.stringify(opts),
      }).then(r => r.json())
        .then(r => {
          if(r.status == 'success')
          console.log(r)
          else
          console.log(r)
        })
        .catch(error => console.log(error))
      return false;
    }

    const disapprove = (e,test_id,user_id)=>{
      e.preventDefault()
      console.log("You pressed button")
      let opts = {
        'user_id': user_id,
        'test_id': test_id,
        'action': "rejected",
      }
      console.log(opts)
      authFetch('/api/update_token', {
        method: 'post',
        body: JSON.stringify(opts),
      }).then(r => r.json())
        .then(r => {
          if(r.status == 'success')
          console.log(r)
          else
          console.log(r)
        })
        .catch(error => console.log(error))
      return false;
    }

  return (
    <>{logged&&access.type==3?
      <>
      <Navbar />
      <Holder>
        <div>
          <Sidebar />
        </div>
        <div className='main'>
        <h1>Token Verification</h1>
        <div className='token'>
        <div style={{overflowY:"scroll",height:"58vh"}}>          
        <CustomButton 
            type="submit" 
            onClick={all}
            style={{margin:"20px 0px 20px -4px"}}>
            Approve all
            </CustomButton>
            {tokens.map((item,i)=>(
              <>
              {
                (item.status == "Pending")?
                <span key={i}>
              <div className='innertoken'>
                <div ><p><b>{item.uname} </b> ({item.user_id}) - {item.created_on} <br/><b>{item.tname} </b> ({item.test_id}) - {item.reasonsss}</p> </div>
                <div >
                  <button onClick={(e)=>approve(e,item.test_id,item.user_id)} className='custom-button' style={{width:"10%"}}> Approve </button>
                  <button onClick={(e)=>disapprove(e,item.test_id,item.user_id)} className='custom-button' style={{width:"10%"}}> Disapprove </button> 
                </div>
              </div>
              
              </span>
                :<></>
              }
              </>
              
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

export default Token;