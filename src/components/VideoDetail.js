import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const VideoDetail = () => {
  const { selectedVideo, autoPlay } = useContext(GlobalContext);
  if (!selectedVideo) {
    return (<div>Loading... </div>);
  }

  let videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`

  const ALLOW = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
  
  if (autoPlay) {
    videoSrc = `${videoSrc}?autoplay=1&mute=1&enablejsapi=1`;
  }

  const MainPage = () => {
    return (
      <div className="video-detail">
        <iframe title="video player" src={videoSrc} gyroscope="true" frameBorder="0" allow={ ALLOW } allowFullScreen/>
        <h4> {selectedVideo.snippet.title}</h4>
        <p>{selectedVideo.snippet.description}</p>
      </div>
    );
  };

  return <MainPage />;
};

export default VideoDetail;
