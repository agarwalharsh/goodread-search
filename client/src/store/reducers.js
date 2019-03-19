import { BooksActionTypes } from './constants';

function BooksReducer(currentState, action) {
    switch (action.type) {
        case BooksActionTypes.SET_BOOKS_LIST:
            return setBookList(currentState, action);
        case BooksActionTypes.SET_BOOK_DETAIL:
            return setBookDetail(currentState, action);
        default:
            return currentState;
    }
}

function setBookList(currentState, action) {
    const totalPages = parseInt(action.payload.booksListData.GoodreadsResponse.search[0]['total-results'][0]) / 20;
    const booksList = action.payload.booksListData.GoodreadsResponse.search[0].results[0].work;
    console.log('List- ', booksList);

    return Object.assign({}, currentState, { booksList, totalPages, isFetched: true});
}

function setBookDetail(currentState, action) {
    const bookDetail = {};
    bookDetail.title = action.payload.bookDetailData.GoodreadsResponse.book[0].title[0];
    bookDetail.image = action.payload.bookDetailData.GoodreadsResponse.book[0].image_url[0];
    bookDetail.desc = action.payload.bookDetailData.GoodreadsResponse.book[0].description[0];
    bookDetail.rating = action.payload.bookDetailData.GoodreadsResponse.book[0].average_rating[0];
    bookDetail.totalRatings = action.payload.bookDetailData.GoodreadsResponse.book[0].ratings_count[0];

    const authorList = action.payload.bookDetailData.GoodreadsResponse.book[0].authors[0].author;

    bookDetail.authors = authorList.map((i) => i.name[0]).join(', ');

    return Object.assign({}, currentState, { bookDetail });
}

export default BooksReducer;