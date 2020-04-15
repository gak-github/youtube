export default (state, action) => {
  switch (action.type) {
    case "GET_VIDEOS":
      return {
        ...state,
        loading: true,
        videos: action.payload,
        term: action.term
      }
    default:
      return state
  }
};
