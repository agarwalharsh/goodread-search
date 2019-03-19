import { action } from 'typesafe-actions';
import { BooksActionTypes } from './constants';

export const retrieveBooksAction = (searchString) => action(BooksActionTypes.RETRIEVE_BOOKS, { searchString });
export const setBooksListAction = (booksListData) => action(BooksActionTypes.SET_BOOKS_LIST, { booksListData });
export const retrieveBookDetailAction = (bookId) => action(BooksActionTypes.RETRIEVE_BOOK_DETAIL, { bookId });
export const setBookDetailAction = (bookDetailData) => action(BooksActionTypes.SET_BOOK_DETAIL, { bookDetailData });