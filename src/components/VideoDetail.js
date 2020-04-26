import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const VideoDetail = () => {
  const { selectedVideo } = useContext(GlobalContext);
  if (!selectedVideo) {
    return (<div>Loading......</div>);
  }

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`

  return (
    <>
      <div className="video-detail">
        <iframe title="video player" src={videoSrc} gyroscope="true" frameBorder="0" allow="accelerometer" allowFullScreen/>
        <h4> {selectedVideo.snippet.title}</h4>
        <p>{selectedVideo.snippet.description}</p>
      </div>
    </>
  );
};

export default VideoDetail;
