import React, { useEffect, useState } from 'react'
import "./SideBar.css"
import { getChannels, setPosts } from '../../Action';
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = () => {
  const dispatch=useDispatch();
  const channelName = useSelector((state) => state.reducer.channels);


  async function handleChannelClick(channelId){
     dispatch(setPosts(channelId));
   
  }
 
  useEffect(()=>{
    dispatch(getChannels());
    
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