import axios from 'axios';
import { apiKey } from './constants';

export function getBooksList(searchString) {
    return axios.get(`http://localhost:3001/api/getBooksList/${searchString}/${apiKey}`)
        .then(res => Promise.resolve(res.data));
}

export function getBookDetail(bookId) {
    return axios.get(`http://localhost:3001/api/getBookDetail/${bookId}/${apiKey}`)
        .then(res => Promise.resolve(res.data));
}
