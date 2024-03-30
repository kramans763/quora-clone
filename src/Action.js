import { GETPOSTS, GETCHANNELS, SETPOSTS  } from "./Constants";



export const getPosts= () =>{
  return async (dispatch) =>{
    const response =  await fetch('https://academics.newtonschool.co/api/v1/quora/post', {
        headers:  {
           'projectID': 'f104bi07c490'
        }
    })
    let data=await response.json();
    const posts = data.data || [];
    dispatch({
      type: 'GETPOSTS',
      posts: posts
    })
  }
}

export const getChannels =()=>{
  return async (dispatch) =>{
    const response =  await fetch('https://academics.newtonschool.co/api/v1/quora/channel?limit=10', {
        headers:  {
           'projectID': 'f104bi07c490'
        }
    })
    let data=await response.json();
    const channels = data.data || [];
    dispatch({
      type: 'GETCHANNELS',
      channels: channels
    })
  }
}


// export const setPosts =(channelId)=>{
//   return async (dispatch) =>{
//     const response= await fetch(`https://academics.newtonschool.co/api/v1/quora/channel/${channelId}/posts`, {
//       headers: {
//         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NGY0YjhjZTk3MTgyMDE5ZjRlMGJjOSIsImlhdCI6MTY5OTY5NTUwMCwiZXhwIjoxNzMxMjMxNTAwfQ.Iov3FsMDGbOI2WOxoB2gA9r5x_Sn5oVWr8HKfbevNps',
//         'projectID': 'f104bi07c490'
//       }
//     })
//     let data=await response.json();
//     console.log("channel", data)
//     const channelDetails=data.data || [];
//     dispatch({
//       type: 'SETPOSTS',
//       posts: channelDetails
//     })
//  }
// }
