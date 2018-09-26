/* jshint esnext: true */

import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SearchTerms from './SearchTerms';

class SearchPage extends React.Component {
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
                // value={query}
                onChange={(event) => this.updateQuery(event.target.value)}
              />

              <hr />
              <div id="search-terms"><strong>Search Term Library</strong></div>
              <SearchTerms />
            </div>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;