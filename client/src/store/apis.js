import axios from 'axios';
import { apiKey } from './constants';

export function getBooksList(searchString) {
    return axios.get(`https://goodreads-search-app.herokuapp.com/api/getBooksList/${searchString}/${apiKey}`)
        .then(res => Promise.resolve(res.data));
}

export function getBookDetail(bookId) {
    return axios.get(`https://goodreads-search-app.herokuapp.com/api/getBookDetail/${bookId}/${apiKey}`)
        .then(res => Promise.resolve(res.data));
}
