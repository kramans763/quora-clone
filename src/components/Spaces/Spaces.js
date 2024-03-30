import React, { useEffect, useState } from 'react'
import "./Spaces.css"
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {FaRegCompass} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';
import Navbar from '../Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getChannels } from '../../Action';
import spaceImg from "../../assets/space-img.webp"
import spaceph from "../../assets/space 2.webp"
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
const Spaces = () => {
    const dispatch=useDispatch();
    const channels = useSelector((state) => state.reducer.channels);
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(true);
  
    const navigate=useNavigate();

    const openPopup = () => {
      setIsOpen(true);
      console.log("isopen", isOpen);
    };
  
    const closePopup = () => {
      setIsOpen(false);
    };
   
    useEffect(()=>{
      dispatch(getChannels());
      
    },[]);
    console.log("ch", channels);

  
    const toggleButton = () => {
      
      if (title.trim() !== '' && description.trim() !== '') {
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
    };
    
    const handleUnderConst=()=>{
     navigate('/working');
    }

    const handlePageDetail=(name, description)=>{
       navigate('/channel_detail_page' , { state: {name , description} } );
    }
  
  return (
    <div className='dark:bg-neutral-900 dark:text-zinc-400'>
    <Navbar/>
     <div className='spaces '>   
        <div className='spaces-top'>
            <div className='spaces-top-left dark:bg-neutral-800 dark:text-zinc-400'>
               <h2>Your Spaces</h2>
               <p>Follow Spaces to explore your interests on Quora.</p>
               <div className='spaces-top-btns'>
                  <div className='spaces-top-btn' onClick={openPopup}>
                    <AiOutlinePlusCircle/>
                    Create Spaces
                   </div>
                   <div className='spaces-top-btn' onClick={handleUnderConst}>
                     <FaRegCompass/>
                     Discover Spaces 
                   </div>
                </div>
            </div>
            <div className='spaces-top-right dark:bg-neutral-800 dark:text-zinc-400  '>
                <div className='spaces-top-right-top'>
                    <p>Pending Invites</p>
                </div>
                <div className='spaces-top-right-btm'>
                   <AiOutlineMail/>
                   No Invites
                </div>
            </div>
        </div>
        <div className='spaces-main-content '>
            <h2>Discover Spaces</h2>
            <p>Spaces you might like</p>
            <div className='spaces-container'>
             {
                channels && channels.length && channels.map((item)=>{
                  return(
                    <div className='spaces-card dark:bg-neutral-800 dark:text-zinc-400' onClick={() =>handlePageDetail(item.name, item.description)}>
                        <img src={spaceImg} alt="" className='cover-photo'/>
                        <img src={spaceph} alt="" className='profile-photo' />
                        <div className='ch-name-content'>
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                        </div>
                    </div>
                  )  
                })
              }
            </div>
        </div>
     </div>
     {isOpen && (
        
         <div className='popup '> 
           <div className='popup-content dark:bg-neutral-700 dark:text-zinc-400'>
              <div className='close' onClick={closePopup}>
                  <RxCross2/>
              </div>
              <div className='popup-content-upper'>
                <h4>Create a Space</h4>
                <p>Share your interests, curate content, host discussions, and more.</p>
              </div>
              <div className='popup-content-middle'>
                <h5>Name</h5>
                <p>This can be changed in Space settings.</p>
                <input
                  type="text"   
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    toggleButton(); 
                  }}
                />
              </div>
              <div className='popup-content-lower'>
                <h5>Brief description</h5>
                <p>Include a few keywords to show people what to expect if they join.</p>
                <input

                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                    toggleButton(); 
                  }}
                />

              </div>
              <div className='popup-content-lower-button'>
                <button disabled={buttonDisabled} onClick={() =>handlePageDetail(channels[0].name, channels[0].description)}>Create</button>
              </div>
            
          </div> 
         </div> 
     )}
    </div>
  )
}

export default Spaces
