import React, { useEffect, useState } from 'react'

const Feed = () => {
   const[feedDetails,setFeedDetails]=useState([]);

   async function fetchFeeds(){
    const response = await fetch('https://academics.newtonschool.co/api/v1/quora/post', {
        headers:  {
           'projectID': 'f104bi07c490'
        }
    })
    let data=await response.json();
    data=data.data;
    setFeedDetails(data);
    console.log("feed",data);
   }
   useEffect(()=>{
     fetchFeeds(); 
   },[]) 
  return (
    <div className='main-feed'>
      {
        feedDetails && feedDetails.length
        && feedDetails.map((item)=>{
            return(
                <div className='card'>
                  <div className='card-upper'>
                    <img src={item.author.profileImage}/>
                    <div upper-right>
                      <h6>{item.author.name}</h6>
                      <p>dfgghhjjkkkkkkkkkkkkkkkkkkkkkkk</p>
                      
                    </div>
                    
                  </div>  
                  
                  <h3>{item.title}</h3>
                </div>
            )
        })
      }
    </div>
  )
}

export default Feed