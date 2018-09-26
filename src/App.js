/* jshint ignore:start */

import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import MainPage from './MainPage';
import SearchPage from './SearchPage';

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        {/* <MainPage /> */}
        <SearchPage />
      </div>
    )
  }
}

export default BooksApp;

/* written with help from tutorial from Maeva: */
/* https://www.youtube.com/watch?v=i6L2jLHV9j8 */