/* jshint ignore:start */

import React from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css';
import MainPage from './MainPage';
import SearchPage from './SearchPage';

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
  }

  render() {
    return (
      <div className="app">
        <MainPage 
          books={this.state.books}
          moveShelf={this.moveShelf}
        />
      </div>
    )
  }
}

export default BooksApp;

/* based on tutorial from Maeva: */
/* https://www.youtube.com/watch?v=i6L2jLHV9j8 */