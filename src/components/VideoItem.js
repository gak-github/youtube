import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const VideoItem = ({ video }) => {
  const { setSelectedVideo, setAutoPlay } = useContext(GlobalContext);

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
    setAutoPlay(true);
  };

  return (
      <li className="video-item">
        <button className= "video-item__button" onClick= { () => onVideoSelect(video)}>
          <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
          {video.snippet.title}
        </button>
      </li>
  );
};

export default VideoItem;
