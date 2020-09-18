import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ video }) => {
  return (
    <div>
      {video.map((videoitem) => {
        return <VideoItem videoItem={videoitem} />;
      })}
    </div>
  );
};

export default VideoList;
