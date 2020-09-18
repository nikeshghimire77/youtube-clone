import React, { useState } from 'react';
import { Paper, TextField } from '@material-ui/core';

const SearchBar = ({ onFormSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    //console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (event) => {
    onFormSubmit(searchTerm);
    event.preventDefault();
  };

  return (
    <Paper elevation={6} style={{ padding: '25px' }}>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label='Search...' onChange={handleChange} />
      </form>
    </Paper>
  );
};

export default SearchBar;
