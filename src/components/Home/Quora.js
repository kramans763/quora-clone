import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Quora.css";
import Sidebar from '../Sidebar/Sidebar'

const Quora = () => {
  return (
    <div className='quora'>
        <div className='navbar-home'>
           <Navbar/>
        </div>
        <h3>Aman</h3>
        <div className='sidebar-home'>
           <Sidebar/>
        </div>
        
    </div>
  )
}

export default Quora