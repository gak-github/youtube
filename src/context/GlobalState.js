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

const getDefaultSearchTerm = () => {
  const searchItems = ['5 am club', 'sadhguru best speech', 'about paypal', 'john maxwell 5 levels of leadership',
                          'better running form', 'benefits of running', 'paypal', 'gcn indoor 30min workout', 'vadivelu comedy', 'illayaraja best tamil songs', 'golden retriever puppies funny videos'];
    const random = Math.floor(Math.random() * Math.floor(searchItems.length));
    if (random < searchItems.length) {
      return searchItems[random];
    }
    return 'About PayPal';
};

// Create context
export const GlobalContext = createContext(initialState);

// provider compoment
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // get video search results (videos)
  async function getVideos(term) {
    term = term || getDefaultSearchTerm();
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
