import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const VideoItem = ({ video }) => {
  const { setSelectedVideo } = useContext(GlobalContext);

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
      <li onClick= { () => onVideoSelect(video)}>
        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
        {video.snippet.title}
      </li>
  );
};

export default VideoItem;
