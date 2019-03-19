import React, { Component, Fragment } from "react" ;
import Logo from '../logo';

export default class BookDetail extends Component {

    componentDidMount() {
        const { bookId } = this.props.params;

        if (bookId) {
            this.props.retrieveBookDetail(bookId);
        }
    }

    render() {
        return (
            <Fragment>
                <header>
                    <Logo />
                </header>
                {this.props.bookData ? 
                    <div className="detail-container">
                            <div className="detail-logo">
                                <img src={this.props.bookData.image} alt="bookLogo"/>
                            </div>
                            <div className="detail-wrap">
                                <div className="detail-title">
                                    {this.props.bookData.title}
                                </div>
                                <div className="detail-authors">
                                    by {this.props.bookData.authors}
                                </div>
                                <div className="detail-rating">
                                    <span>Average Rating: {this.props.bookData.rating}</span>
                                    <span className="total-rating">Total Ratings: {this.props.bookData.totalRatings}</span>
                                </div>
                                <div className="detail-desc" dangerouslySetInnerHTML={{__html: this.props.bookData.desc}}>
                                </div>
                            </div>
                    </div>
                    :
                    <div className="loader">Loading...</div>
                }
            </Fragment>
        )
    }
}
