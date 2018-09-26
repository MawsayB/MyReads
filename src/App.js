// written based on tutorial by Edoh Kodjo: https://www.youtube.com/watch?v=PF8fCAKR0-I&feature=youtu.be
/* jshint esnext: true */

import React from 'react';
import './App.css';
import ListBook from './ListBook';
import SearchTerms from './SearchTerms';
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {

  state = {
    books: [],
    query: '',
    showingBooks: []
  }


  // get all the books before loading the component
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books : books });
    })
  }

  // managing the input state
  updateQuery = (query) => {
    this.setState({ query: query });
    let showingBooks = [];
    if (query) {
      BooksAPI.search(query).then(response => {
        if (response.length) {
          showingBooks = response.map(b => {
            const index = this.state.books.findIndex(c => c.id === b.id);
            if (index >= 0) {
              return this.state.books[index];
            } else {
              return b;
            }
          });
        }
        this.setState({showingBooks});
      });
    }
    else {
      this.setState({showingBooks});
    }
  };


  render() {
    const{query} = this.state;
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <div>
                  <input 
                    type="text"
                    placeholder="Search by title or author"
                    value={query}
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
              {/* {this.state.showingBooks.map((book, i) => {
                <li key={i}>
                <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{

                }} */}
              }}
            </div>
          </div>
        )} />
        <Route exact path="/" render={() => (
          <ListBook />
        )} />
      </div>
    )
  }
}

export default BooksApp
