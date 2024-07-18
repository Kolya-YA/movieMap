import axios from 'axios';

import { TMDB_AUTH_TOKEN, TMDB_URL } from './config';

const tmdbSearchAPI = axios.create({
    baseURL: `${TMDB_URL}/search`,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TMDB_AUTH_TOKEN}`
    },
});

export { tmdbSearchAPI };