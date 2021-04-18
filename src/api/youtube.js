import axios from 'axios';

const KEY = 'AIzaSyDvkLSzQCbYP3rg1sPYcMCGHAX3-WQnWOY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
