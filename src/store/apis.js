import axios from 'axios';
import { apiKey } from './constants';

export function getBooksList(searchString) {
    return axios.get(`https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?q=${searchString}&key=${apiKey}&search[field]=title`)
        .then(res => Promise.resolve(res.data));
}

export function getBookDetail(bookId) {
    return axios.get(`https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/show?format=xml&key=${apiKey}&id=${bookId}`)
        .then(res => Promise.resolve(res.data));
}
