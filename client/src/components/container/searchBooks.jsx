import React, { Component, Fragment } from "react" ;
import Results from '../results';
import Logo from '../logo';

export default class SearchBooks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: '',
        };
    }

    handleChange(searchStr) {
        this.setState({
            searchString: searchStr,
        });

        this.props.retrieveBooks(searchStr);
    }

    render() {
        const data  = this.props.listData;

        return (
            <Fragment>
                <header>
                    <Logo />
                </header>
                <div className="search-container">
                    <div className="search-header">
                        <div className="search-title">Search by Book Title</div>
                        <input type="text" placeholder="Enter a search term" className="search-input"
                        onChange={e => this.handleChange(e.target.value)}
                        value={this.state.searchString}
                        autoFocus
                        />
                    </div>
                    <section className="search-content">
                        {data
                            ? data.isFetched && data.booksList && data.booksList.length > 0 
                                ? <Results listData={data} getBookDetail={this.props.retrieveBookDetail}/>
                                : (
                                    data.isFetched && !data.booksList
                                        ? <h2>No Results</h2>
                                        : (
                                            data && !data.isFetched
                                            ? <h5>Loading...</h5>
                                            : null
                                        )
                                )
                            : null 
                        }
                    </section>
                </div>
            </Fragment>
        )
    }
}
