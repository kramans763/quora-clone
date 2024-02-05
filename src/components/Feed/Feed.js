import React, { useEffect, useState } from 'react'
import "./Feed.css"
import { getPosts } from '../../Action';
import { useDispatch, useSelector } from 'react-redux';
import { ThumbUp, Comment} from '@mui/icons-material';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
const Feed = () => {
   
   const feedDetails = useSelector((state) => state.reducer.posts);
   const dispatch=useDispatch();
   const authToken=localStorage.getItem('authToken');
   const[localLikeCount, setLocalLikeCount]=useState(0);
   const[isLocalLike, setIsLocalLike]=useState(false);
   const[activeId,setActiveId]=useState('');
   const[localDislikeCount, setLocalDislikeCount]=useState(0);

   console.log("feed", feedDetails);
  
   useEffect(()=>{
      dispatch(getPosts());
    
   },[dispatch]) 

   const handleUpVote= (postId, likeCount)=>{
     fetch(`https://academics.newtonschool.co/api/v1/quora/like/${postId}`, {
      method: 'POST',
      headers: {
          'Authorization': `Bearer ${authToken}`,
          'projectID': 'f104bi07c490'
      }
  })
  .then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    setIsLocalLike(true);
    setLocalLikeCount(likeCount+1);
    setActiveId(postId);
    console.log('Upvote successful:', data);
})
.catch(error => {
    alert('Error upvoting post:', error);
   });
}
const handleDownVote= (postId, dislikeCount)=>{
  fetch(`https://academics.newtonschool.co/api/v1/quora/like/${postId}`, {
   method: 'DELETE',
   headers: {
       'Authorization': `Bearer ${authToken}`,
       'projectID': 'f104bi07c490'
   }
})
.then(response => {
 if (!response.ok) {
     throw new Error(`HTTP error! Status: ${response.status}`);
 }
 return response.json();
})
.then(data => {
 setIsLocalLike(true);
 setLocalDislikeCount(dislikeCount+1);
 setActiveId(postId);
 console.log('Downvote successful:', data);
})
.catch(error => {
 alert('Error upvoting post:', error);
});
}
  return (
    <div className='main-feed'>
      {
        feedDetails && feedDetails.length
        && feedDetails.map((item)=>{
           console.log("item", item);
            return(
                <div className='card'>
                  <div className='card-upper'>

                    <img src={item.author.profileImage}/>
                    <div className='upper-right'>
                      {
                        item.author?.name? <h6>{item?.author?.name} </h6>: <p>{item?.channel?.name }</p> 
                       
                      } 

                    </div>   
                  </div>  
                  <div className='card-details'>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                   {
                      item.channel?.image || item?.images ?
                      <img src={item.channel?.image ? item.channel?.image: item?.images } alt="" />
                      :
                      ""
                   } 
                    
                  </div>
                  <div className='like-comment'>
                    <div className='upvote' >
                      <div className='like-expression' onClick={() =>handleUpVote(item._id,item.likeCount)}>
                        <ThumbUp/>
                      </div>
                      {activeId===item._id ? <p>{localLikeCount}</p>:
                          <p>{item.likeCount}</p>
                      }
                    </div>
                    <div className='downvote'>
                    <div className='like-expression' onClick={() =>handleDownVote(item._id,item.dislikeCount)}>
                      <ThumbDownIcon/>
                    </div>
                      {activeId===item._id ? <p>{localDislikeCount}</p>:
                       <p>{item.dislikeCount}</p>
                      }
                    </div>
                    <div className='comments'>
                      <Comment/>
                      <p>{item.commentCount}</p>
                    </div>

                  </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default Feed