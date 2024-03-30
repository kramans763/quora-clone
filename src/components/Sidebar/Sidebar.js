import React, { useEffect, useState } from 'react'
import "./SideBar.css"
import { getChannels} from '../../Action';
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import spaceImg from "../../assets/space 2.webp"
import { RxCross2 } from "react-icons/rx";

const Sidebar = () => {
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

  async function handleChannelClick(chName){
    navigate('/topicDetail' , { state: {chName} } );
   
  }
  
 
  useEffect(()=>{
    dispatch(getChannels());
    
  },[]);
  
  return (
    <>
    <div className='sidebar dark:bg-neutral-900 dark:text-zinc-400'>
      <div className='create-space dark:bg-neutral-700 dark:text-zinc-400'>
         <AddIcon/>
         <p onClick={openPopup}>Create Space</p>
      </div>
      <div className='channel-list'>  
        {
          channels && channels.length && channels.map((cName)=>{ 
          return(
          <div className='channel-name' onClick={()=>handleChannelClick(cName.name)} >
            <img src={spaceImg} alt="" />
             <p>{cName.name}</p>
          </div>
          )  
          })
        }
        </div>
      </div>
      {isOpen && (
        
        <div className='popup'> 
          <div className='popup-content'>
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
    </>
  )
}

export default Sidebar