import axios from 'axios';

const KEY = 'AIzaSyC19KpRpRJGTX9GPOnzp84SME5SYIP6Y64';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
