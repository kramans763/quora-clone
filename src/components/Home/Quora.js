import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Quora.css";
import Sidebar from '../Sidebar/Sidebar'
import Feed from '../Feed/Feed';

const Quora = () => {
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
        </div>
    </div>
  )
}

export default Quora