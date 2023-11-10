import React from 'react'
import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home"

import ListAltIcon from "@mui/icons-material/ListAlt";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search"
import LanguageIcon from "@mui/icons-material/Language"
import { Avatar, Button } from '@mui/material';



const Navbar = () => {
  return (
    <div className='qheader'>
        <div className='qheader-logo'>
            <img src="https://qph.cf2.quoracdn.net/main-qimg-dc1b777005095235798e5dbdb6b710dd" alt="" />
        </div>
        <div className='qheader-icons'>
            <div className='qheader-icon'>
              <HomeIcon/>
            </div>
            <div className='qheader-icon'>
              <ListAltIcon/>
            </div>
            <div className='qheader-icon'>
              <QuestionAnswerOutlinedIcon/>
            </div>
            <div className='qheader-icon'>
              <GroupsIcon/>
            </div>
            <div className='qheader-icon'>
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
          <div className='qheader-avatar'>
            <Avatar/>
          </div>
          <div  className='qheader-icon'>
            <LanguageIcon/>
          </div> 
          <Button>Add Question</Button>
          
        </div>
    </div>
  )
}

export default Navbar