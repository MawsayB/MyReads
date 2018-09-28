/* jshint ignore:start */

import React from 'react';
import { Route, Link } from 'react-router-dom';
import SearchTerms from './SearchTerms';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class SearchPage extends React.Component {
  state = {
    query: '',
    searchedBooks: []
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })
    this.updateSearchedBooks(query);
  }

  updateSearchedBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((searchedBooks) => {
        if (searchedBooks.error) {
          this.setState({ searchedBooks: [] });
        } else {
          this.setState({ searchedBooks: searchedBooks })
        }
      })
    } else {
      this.setState({ searchedBooks: [] });
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">

          <Link className="close-search" to="/">Close</Link>

          <div className="search-books-input-wrapper">
            <div>
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)}
              />

              <hr />
              <div id="search-terms"><strong>Search Term Library</strong></div>
              <SearchTerms />
            </div>
          </div>
        </div>
        <div className="search-books-results">
          {this.state.searchedBooks.map(searchedBook => {
            let shelf = "none";

            this.props.books.map(book => (
              book.id === searchedBook.id ?
              shelf = book.shelf :
              ''
            ));

            return (
              <li key={searchedBook.id}>
                <Book
                  book={searchedBook}
                  moveShelf={this.props.moveShelf}
                  currentShelf={shelf}
                />
              </li>
            )
          })
          }
          <ol className="books-grid">

          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;