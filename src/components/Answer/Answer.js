import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import starLogo from "../../assets/star2.png"
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../Action';
import "./Answer.css";
import userPic from "../../assets/user.png"
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const Answer = () => {
    const quesDetails = useSelector((state) => state.reducer.posts);
    const dispatch=useDispatch();
    const [isPopupOpen, setPopupOpen] = useState(false);
    const userData = JSON.parse(localStorage.getItem('userData'));
    const [selectedTitle, setSelectedTitle] = useState('');
    const [selectedId, setSelectedId] = useState('');
    const [newAnswer,setNewAnswer] = useState('');
    const navigate=useNavigate();
 
    console.log("qdet", quesDetails);
   
 
    useEffect(()=>{
       dispatch(getPosts());
     
    },[dispatch]) 

    const openPopup = (title, id) => {
        setSelectedTitle(title);
        setSelectedId(id);
        setPopupOpen(true);
      };
    
      const closePopup = () => {
        setPopupOpen(false);
      };

      const postAnswer = async () => {
        try {
          const response = await fetch(`https://academics.newtonschool.co/api/v1/quora/comment/${selectedId}`, {
            method: 'POST',
            headers: {
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OTkxYmQyOTlmZGI5ZjlkMTU3MjBiMSIsImlhdCI6MTcwNDU1MjM5NSwiZXhwIjoxNzM2MDg4Mzk1fQ.ggf4vLjLK8t8mybc3l7sRajbq9UGOSoO6dhGTrSm1vY',
              'projectID': 'f104bi07c490',
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify({
              content: newAnswer,
            }),
          });
    
          if (response.ok) {
            alert('Answer posted successfully');
            dispatch(getPosts());
          } else {
            alert('Failed to post answer');
          }
        } catch (error) {
          console.error('Error posting answer:', error);
        } finally {
          closePopup();
        }
      };

      const handlePageDetail=(id, title)=>{
        const updatedTitle=title.toLowerCase().replaceAll(" ", "-");

         navigate(`/pagedetail/${updatedTitle}` , { state: {id} } );
      }

  return (
         <>
           <Navbar/>
           <div className='answers'>
             <div className='answer-heading'>
                <img src={starLogo}/>
                <p>Questions for you</p>
             </div>
             <div className='answers-list'>
              { quesDetails && quesDetails.length
                 && quesDetails.map((item)=>{
                    return(
                        <div className='answer-card'>
                            <div onClick={() =>handlePageDetail(item._id, item.title)}>
                            <h2>{item.title}</h2>
                            </div>
                            <p>{item.commentCount} answers</p>
                            <button onClick={() => openPopup(item.title, item._id)}>Answer</button>
                        </div>
                    )
                 })
              }
             </div>
           </div >
           {isPopupOpen && (
             <div className='popup-overlay'>
               <div className='popup-content'>
                   <div className='popup-close' onClick={closePopup}>
                      <CloseIcon/>
                   </div>
                  <div className='popup-user-details'>
                    <img src={userPic} alt="" />
                    <h3>{userData.name}</h3>
                  </div>
                  
                    <h2>{selectedTitle}</h2>
          
                  <div className='popup-form'>
                    <input type="text" 
                           placeholder='Write your Answer'
                           value={newAnswer}
                           onChange={(e) => setNewAnswer(e.target.value)}
                    />
                    <button className='popup-btn' onClick={postAnswer} >Post</button>
                  </div>
                  
               </div>
              </div>
            )}
         </>
  )
}

export default Answer