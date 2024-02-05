import React, { useEffect, useState } from 'react'
import "./AnswerPageDetail.css"
import Navbar from '../Navbar/Navbar'
import { useLocation } from 'react-router-dom';

const AnswerPageDetail = () => {
    const { state } = useLocation();
     const id=state.id;
     console.log("idddd",id)
     const [comments, setComments] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

    const fetchPostData = async () => {
      const authToken=localStorage.getItem('authToken');
      try {
        const response = await fetch(`https://academics.newtonschool.co/api/v1/quora/post/${id}`, {
          headers: {
             'Authorization': `Bearer ${authToken} `,
             'projectID': 'f104bi07c490'
            }
         });
         let data = await response.json();
         data=data.data;
         setComments(data); // Update state with fetched data
        
    } catch (error) {
      console.error('Error fetching data:', error);
      
    }  finally {
      setLoading(false); 
      
    }
  };

  useEffect(() => {
    fetchPostData(); 
  }, [id]);

  console.log("comments", comments);
  return (
    <div>
      <Navbar/>
      <div className='answer-page'>
       
        
        <div className='answer-page-top'>
          <h2>{comments?.title}</h2> 
          <p>Answer:- {comments.content}</p>
        </div>
      
      </div>
    </div>
  )
}

export default AnswerPageDetail