import { GETPOSTS, GETCHANNELS, SETPOSTS, TOGGLE_DARK_MODE } from "./Constants";
const initialState = {
    posts:[],
    channels: [],
    darkMode: false
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      
      case "GETPOSTS":
        return{
          ...state,
          posts: action.posts,
        }
      case "GETCHANNELS":
        return{
          ...state,
          channels:action.channels,
        } 
      case "SETPOSTS":
        console.log("poooo",action.posts)
        return{
          ...state,
          posts:[...action.posts],
          } 
      case TOGGLE_DARK_MODE:
        return {
          ...state,
          darkMode: !state.darkMode 
        };    
      default:
        return state;
    }
  };
 
  export default reducer;