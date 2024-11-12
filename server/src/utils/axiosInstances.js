import axios from 'axios';

import { TMDB_AUTH_TOKEN, TMDB_URL, TMDB_IMAGE_API } from './config.js';

const tmdbApi = axios.create({
    baseURL: TMDB_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TMDB_AUTH_TOKEN}`
    },
});

const tmdbImageApi = axios.create({
    baseURL: TMDB_IMAGE_API,
    responseType: 'stream',
});

export { tmdbApi, tmdbImageApi };