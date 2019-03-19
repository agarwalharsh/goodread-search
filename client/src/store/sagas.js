import { takeLatest, call, put } from 'redux-saga/effects';
import { BooksActionTypes } from './constants';
import { getBooksList, getBookDetail } from './apis';
import xml2js from 'xml2js';
import { setBooksListAction, setBookDetailAction } from './actions';
const parser = new xml2js.Parser();

function* retrieveBooksList(action) {
    let booksListData;
    const booksResponse = yield call(getBooksList, action.payload.searchString);

    parser.parseString(booksResponse, (err, result) => {
        booksListData = result;
    })

    yield put(setBooksListAction(booksListData));
}

function* retrieveBookDetail(action) {
    let bookDetailData;
    const booksResponse = yield call(getBookDetail, action.payload.bookId);

    parser.parseString(booksResponse, (err, result) => {
        bookDetailData = result;
    })

    yield put(setBookDetailAction(bookDetailData));
}

export default function* sagas() {
    yield takeLatest(BooksActionTypes.RETRIEVE_BOOKS, retrieveBooksList);
    yield takeLatest(BooksActionTypes.RETRIEVE_BOOK_DETAIL, retrieveBookDetail);
}