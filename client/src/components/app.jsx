import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import SearchBooks from './container/searchBooks';
import BookDetail from './container/bookDetail';
import { retrieveBooksAction, retrieveBookDetailAction } from '../store/actions';

class App extends Component {
    render() {
      return (
        <Fragment>
          <BrowserRouter>
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <SearchBooks {...this.props} />
                )}
              />
              <Route
                path="/detail/:bookId"
                render={props => (
                  <BookDetail params={props.match.params} {...this.props} />
                )}
              />
            </Switch>
          </BrowserRouter>
        </Fragment>
      );
    }
  }
  
function mapStateToProps(state) {
    return {
        listData: state,
        bookData: state && state.bookDetail
    };
}
  
const mapDispatchToProps = ((dispatch) => {
    return {
        retrieveBooks: (searchString) => { dispatch(retrieveBooksAction(searchString))},
        retrieveBookDetail: (bookId) => { dispatch(retrieveBookDetailAction(bookId))}
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(App);