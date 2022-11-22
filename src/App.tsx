import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header/>
      <Products></Products>
    </div>
  );
}

export default App;
