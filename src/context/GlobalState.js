import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial state
const initialState = {
  videos: [],
  term: '',
  error: null,
  loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// provider compoment

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // get video search results (videos)
  async function getVideos(term) {
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
  
  return (
    <GlobalContext.Provider
      value={{
        videos: state.videos,
        term: state.term,
        error: state.error,
        loading: state.loading,
        getVideos,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
