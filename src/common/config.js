import axios from 'axios';
import { getStorage } from './helpers/storage';

const ROOT_URL = (process.env.NODE_ENV !== "production") ? 'http://localhost:3090' : 'CHANGEME!!';

// Set config defaults when creating the instance
export var axioss = axios.create({
    baseURL: `${ROOT_URL}`,
    headers: {
        common: {
            'x-auth': getStorage('token')
        }
    }
});