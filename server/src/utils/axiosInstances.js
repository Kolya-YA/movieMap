import axios from 'axios';

import { TMDB_AUTH_TOKEN, TMDB_URL } from './config.js';

const tmdbApi = axios.create({
    baseURL: TMDB_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TMDB_AUTH_TOKEN}`
    },
});

export { tmdbApi };