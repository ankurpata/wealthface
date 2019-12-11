import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Header from './components/Header/';
import Main from './components/Body/Main';
import Footer from './components/Footer/';
import './App.css';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </HashRouter>

  );
}

export default App;
