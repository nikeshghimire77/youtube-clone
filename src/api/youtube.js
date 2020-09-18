import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: 'AIzaSyDiiQP3l0GbbmUZLro-f4HZaT48yu6YJ0I',
  },
});
