import axios from 'axios';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
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

export function openModal(gif) {
    return {
        type: OPEN_MODAL,
        gif
    }
}

export function closeModal() {
    return {
        type: CLOSE_MODAL
    }
}