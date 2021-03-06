import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import VideoItem from './VideoItem';

const VideoList = () => {
  const { videos, getVideos } = useContext(GlobalContext);
  useEffect(() => {
      getVideos();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
      <>
          <ul id="list" className="video-list">
              {videos.map(video => (
                  <VideoItem
                      key={video.etag}
                      video={video}
                  />
              ))}
          </ul>
      </>
  );
};

export default VideoList;
