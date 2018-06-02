import axios from 'axios';

export const REQUEST_GIFS = 'REQUEST_GIFS';

const apiKey = 'dc6zaTOxFJmzC';
const limit = 10;
const API_URL = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=${limit}&q=`;

export function requestGifs(term = null) {
    const data = axios.get(API_URL + term.replace(/\s/g, '+'));

    return {
        type: REQUEST_GIFS,
        payload: data
    }
}