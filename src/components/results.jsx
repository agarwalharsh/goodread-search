import React, { Component } from "react" ;
import { Redirect } from 'react-router-dom';

export default class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    selectBook(event, bookId) {
        event.preventDefault();
        this.setState({
            redirect: `/detail/${bookId}`,
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />;
        } else {
            return (
                <div className="results-list">
                    {this.props.listData.booksList.map((item, i) => {
                        return (
                            <div className="result-item" key={i} onClick={(e) => this.selectBook(e, item.best_book[0].id[0]['_'])}>
                                <div className="book-logo">
                                    <img src={item.best_book[0].small_image_url[0]} alt="bookLogo"/>
                                </div>
                                <div className="book-title-wrap">
                                    <div className="title-text">
                                        Title:
                                    </div>
                                    <div className="title-name">
                                        {item.best_book[0].title}
                                    </div>
                                </div>
                                <div className="book-author">
                                <div className="author-text">
                                        Author:
                                    </div>
                                    <div className="author-name">
                                        {item.best_book[0].author[0].name.join(', ')}
                                    </div>
                                </div>
                        </div>)
                    })}
                </div>
            )
        }
    }
}