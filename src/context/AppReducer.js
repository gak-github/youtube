export default (state, action) => {
  switch (action.type) {
    case "GET_VIDEOS":
      return {
        ...state,
        loading: true,
        videos: action.payload,
        term: action.term,
        selectedVideo: action.payload.length > 0 ? action.payload[0] : ''
      }
    case "SET_SELECTED_VIDEO": 
      return {
        ...state,
        selectedVideo: action.payload
      }
    case "SET_AUTO_PLAY": 
      return {
        ...state,
        autoPlay: action.payload
      }
    default:
      return state
  }
};
