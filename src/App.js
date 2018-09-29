/* jshint ignore:start */

import React from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MainPage
            books={this.state.books}
            moveShelf={this.moveShelf}
          />
        )} />
        <Route exact path="/search" render={() => (
          <SearchPage
            moveShelf={this.moveShelf}
            books={this.state.books}
          />
        )}
        />
      </div>
    )
  }
}

export default BooksApp;

/* based on tutorial from Maeva: */
/* https://www.youtube.com/watch?v=i6L2jLHV9j8 */