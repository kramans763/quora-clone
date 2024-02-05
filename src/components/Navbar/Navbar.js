import React, { useEffect, useState } from 'react'
import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home"

import ListAltIcon from "@mui/icons-material/ListAlt";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search"
import LanguageIcon from "@mui/icons-material/Language"
import { Avatar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';


const Navbar = () => {
  const navigate=useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [showUserInfo, setShowUserInfo] = useState(false);
  

  useEffect(() => {
    
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
      
      setIsLoggedIn(true);
      const userData = JSON.parse(localStorage.getItem('userData'));
      if (userData && userData.name) {
        setUserName(userData.name);
      }
    }
  }, []);

  const handleLogout = () => {

    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const toggleUserInfo = () => {
    setShowUserInfo(!showUserInfo);
  };
  const handleAnswerComp=()=>{
    navigate('/answer')
  }
  const handleProfile=()=>{
    navigate('/login')
  }

  const handleAddQustion=()=>{
    navigate('/addQues')
  }
  const handleHome =()=>{
    navigate('/')
  }
  const handleUnderConstruction =()=>{
    navigate('/working')
  }
  return (
    <div className='qheader'>
        <div className='qheader-logo'>
            <img src="https://qph.cf2.quoracdn.net/main-qimg-dc1b777005095235798e5dbdb6b710dd" alt="" />
        </div>
        <div className='qheader-icons'>
            <div className='qheader-icon' onClick={handleHome}>
              <HomeIcon/>
            </div>
            <div className='qheader-icon' onClick={handleUnderConstruction}>
              <ListAltIcon/>
            </div>
            <div className='qheader-icon' onClick={handleAnswerComp}>
              <NoteAltOutlinedIcon/>
            </div>
            <div className='qheader-icon'>
              <GroupsIcon/>
            </div>
            <div className='qheader-icon' onClick={handleUnderConstruction}>
              <NotificationsIcon/>
            </div>
        </div>
        
        <div className='qheader-input'>
          <div  className='qheader-icon'>
            <SearchIcon/>
          </div>
          <input type='text' placeholder='Search Quora'/>
        </div>

        <div className='qheader-rem'>
          <div className='qheader-avatar' onClick={toggleUserInfo}>
            <Avatar/>
            {showUserInfo && isLoggedIn && (
            <div className="user-info-popup">
              <span className="user-name">{userName}</span>
              <button onClick={handleLogout}>Logout</button>
            </div>
        )}
          </div>
          <div  className='qheader-icon' onClick={handleUnderConstruction}>
            <LanguageIcon/>
          </div> 
          <Button onClick={handleAddQustion}>Add Question</Button>
          
        </div>
    </div>
  )
}

export default Navbar