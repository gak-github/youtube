import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial state
const initialState = {
  videos: [],
  term: '',
  error: null,
  loading: true,
  setSelectedVideo: ''
};

// Create context
export const GlobalContext = createContext(initialState);

// provider compoment
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // get video search results (videos)
  async function getVideos(term) {
    term = term || 'vadivelu commedy';
    try {
      const res = await axios.get(`/.netlify/functions/youtube?search=${term}`);
      dispatch({
        type: "GET_VIDEOS",
        payload: res.data.data,
        term: term
      });
    } catch (error) {
      dispatch({
        type: "SEARCH_ERROR",
        payload: error.response.data.error,
      })
    }
  }

  function setSelectedVideo(video) {
    dispatch({
      type: "SET_SELECTED_VIDEO",
      payload: video
    });
  }
  
  return (
    <GlobalContext.Provider
      value={{
        videos: state.videos,
        term: state.term,
        error: state.error,
        loading: state.loading,
        selectedVideo: state.selectedVideo,
        setSelectedVideo,
        getVideos
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
