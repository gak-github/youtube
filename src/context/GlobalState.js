import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";
const _get = require('lodash').get;

// Initial state
const initialState = {
  videos: [],
  term: '',
  error: null,
  loading: true,
  setSelectedVideo: '',
  setAutoPlay: ''
};

const DEFAULT_SEARCH = '5 am club';

// Create context
export const GlobalContext = createContext(initialState);

// provider compoment
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // get video search results (videos)
  async function getVideos(term) {
    term = term || DEFAULT_SEARCH;
    try {
      const res = await axios.get(`/.netlify/functions/youtube?search=${term}`);
      dispatch({
        type: "GET_VIDEOS",
        payload: _get(res, 'data.data'),
        term: ""
      });
    } catch (error) {
      dispatch({
        type: "SEARCH_ERROR",
        payload: _get(error, 'response.data.error'),
      })
    }
  }

  function setSelectedVideo(video) {
    dispatch({
      type: "SET_SELECTED_VIDEO",
      payload: video
    });
  }


  function setAutoPlay(isAutoPlay) {
    dispatch({
      type: "SET_AUTO_PLAY",
      payload: isAutoPlay
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
        autoPlay: state.autoPlay,
        isTestData: state.isTestData,
        setSelectedVideo,
        setAutoPlay,
        getVideos
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
