import React from 'react';
import './App.css';

import HeaderComponent from './components/HeaderComponent';
import SearchComponent from './components/SearchComponent';
import SearchResultsComponent from './components/SearchResultsComponent';
import Error from './components/Error';
import FooterComponent from './components/FooterComponent';
import MovieComponent from './components/MovieComponent';

import store from "./store/";

function App() {
  return (
    <main className="App">
      <HeaderComponent/>
      <SearchComponent store={store}/>
      <Error store={store}/>
      <SearchResultsComponent store={store}/>
      <MovieComponent store={store} />
      <FooterComponent/>
    </main>
  );
}

export default App;
