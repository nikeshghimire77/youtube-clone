import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import youtube from './api/youtube';
import { SearchBar, VideoList, VideoDetail } from './components/index';

import './App.css';

const App = () => {
  const [video, setVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', { params: { q: searchTerm } });
    setVideo(response.data.items);
    setSelectedVideo(response.data.items[0]);

    console.log(selectedVideo);
  };
  return (
    <Grid justify='center' container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail />
          </Grid>
          <Grid item xs={8}>
            <VideoList />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
