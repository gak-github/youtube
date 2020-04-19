import React from "react";
import "../styles/App.css";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import VideoList from "../components/VideoList";
import VideoDetail from "../components/VideoDetail";
import { GlobalProvider } from "../context/GlobalState";

function IndexPage() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Header />
        <SearchBar />
        <VideoDetail />
        <VideoList />
      </div>
    </GlobalProvider>
  )
}

export default IndexPage;
