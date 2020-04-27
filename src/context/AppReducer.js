const _get = require('lodash').get;

export default (state, action) => {
  switch (action.type) {
    case "GET_VIDEOS":
      return {
        ...state,
        loading: true,
        videos: _get(action, 'payload.videos'),
        term: '',
        isTestData: _get(action, 'payload.isTestData'),
        selectedVideo: _get(action, 'payload.videos').length > 0 ? action.payload.videos[0] : ''
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
