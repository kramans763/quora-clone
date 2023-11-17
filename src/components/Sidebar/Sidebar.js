import React, { useEffect, useState } from 'react'
import "./SideBar.css"

const Sidebar = () => {
  const [channelName,setChannelName]=useState([]);

  async function fetchChannel(){
    const response= await fetch('https://academics.newtonschool.co/api/v1/quora/channel', {
      headers: {
         // 'Authorization': 'Bearer YOUR_JWT_TOKEN',
          'projectID': 'f104bi07c490'
      }
  })
  let data= await response.json();
  data=data.data;
  setChannelName(data)
  console.log("daata",data);

  }
  async function handleChannelClick(channelId){
    const response= await fetch(`https://academics.newtonschool.co/api/v1/quora/channels/${channelId}/posts`, {
      headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NGY0YjhjZTk3MTgyMDE5ZjRlMGJjOSIsImlhdCI6MTY5OTY5NTUwMCwiZXhwIjoxNzMxMjMxNTAwfQ.Iov3FsMDGbOI2WOxoB2gA9r5x_Sn5oVWr8HKfbevNps',
         'projectID': 'f104bi07c490'
      }
    })
    let data=await response.json();
    console.log("channel dtails",data)
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
          <div className='channel-name' onClick={()=>handleChannelClick(cName._id)}>
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