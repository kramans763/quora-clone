import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import "./Quora.css";
import Sidebar from '../Sidebar/Sidebar'
import Feed from '../Feed/Feed';
import AdImg from '../../assets/advertisement.png'
import { useNavigate } from 'react-router-dom';

const Quora = () => {
  const navigate = useNavigate();

  useEffect(() => {
    
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      navigate('/login');
    }
  }, [navigate]);
  return (
    <div className='quora'>
        <div className='navbar-home'>
           <Navbar/>
        </div>
        <div className='main-content'>
          <div className='sidebar-home'>
            <Sidebar/>
          </div>
          <div className='feeds'>
             <Feed/>
          </div>
          <div className='advertisement'>
            <img src={AdImg} alt="ad" />
          </div>
        </div>
    </div>
  )
}

export default Quora