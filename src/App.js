import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import youtube from './api/youtube';
import { SearchBar, VideoList, VideoDetail } from './components/index';

import './App.css';

const App = () => {
  const [videos, setVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', { params: { q: searchTerm } });
    setVideo(response.data.items);
    setSelectedVideo(response.data.items[0]);

    console.log(selectedVideo);
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };
  return (
    <Grid style={{ justifyContent: 'center' }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
