import React, { useEffect, useState } from 'react'
import "./SideBar.css"

const Sidebar = () => {
  const [channelName,setChannelName]=useState([]);

  async function fetchChannel(){
    const response= await fetch('https://academics.newtonschool.co/api/v1/quora/channel', {
      headers: {
          'Authorization': 'Bearer YOUR_JWT_TOKEN',
          'projectID': 'f104bi07c490'
      }
  })
  let data= await response.json();
  data=data.data;
  setChannelName(data)
  console.log("daata",data);

  }
 
  useEffect(()=>{
    fetchChannel();
  },[]);

  return (
    <div className='sidebar'>
      <div className='channel-list'>
        {
          channelName && channelName.length && channelName.map((cName)=>{ 
          return(
          <div className='channel-name'>
             <p>{cName.name}</p>
          </div>
          )  
          })
        }
      </div>
     
       
    </div>
  )
}

export default Sidebar