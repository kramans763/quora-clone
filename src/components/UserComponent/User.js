import React, { useState } from 'react'
import "./User.css"
import { useLocation } from 'react-router-dom';
import { SlUserFollow } from "react-icons/sl";
import Navbar from '../Navbar/Navbar';
import CardComponent from '../CardComponnt/CardComponent';
const User = () => {
    const { state } = useLocation();
    const{item}=state;
    const userData = JSON.parse(localStorage.getItem('userData'));
    const [followStatus, setFollowStatus] = useState(false); // State to track follow status

    const toggleFollow = () => {
        setFollowStatus(!followStatus); // Toggle follow status
    };
    console.log("item", item);
  return (
    <>
    <Navbar/>
    <div className='userComponent-page dark:bg-neutral-900 dark:text-zinc-400'>
    <div className='userComponent'>
        <div className='userComponent-left'>
            <div className='userComponent-left-top'>
                <div className='userComponent-left-top-left'>
                  <img src="https://quora-clone-psi.vercel.app/static/media/facebook-profile-picture-no-pic-avatar.191a33733d14b57a0134.webp" alt="" />
                </div>
                <div className='userComponent-left-top-right'>
                   <p className='userComponent-author'>{item.author.name}</p>
                   <div className='userComponent-follow-btn'   onClick={toggleFollow} style={{ backgroundColor: followStatus ? '#EFF0F0' : 'blue', color: followStatus ? 'blue' : 'white' }}>
                     <SlUserFollow/>
                     <p>{followStatus ? 'Following' : 'Follow'}</p>
                   </div>
                </div>
            </div>
            <div className='userComponent-left-content'>
              <CardComponent
                  pageType="user"
                  item={item}  
                  userData={userData}
                 
              />

            </div>
        </div>
        <div className='userComponent-right'>
           <div className='userComponent-right-top'>
             <p>Credentials and Highlights</p>
           </div>
           <div className='userComponent-right-lower'>
           <p>Phone number: <span className="phone-number">No data found</span></p>
           <p>Email: <span className="phone-number">{userData.email}</span></p>
           <p>joined 2024</p>
           </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default User