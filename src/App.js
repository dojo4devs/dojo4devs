import React from 'react';
import logo from './dojo4devs.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './pages/header/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <img src={logo} />
      </header>
    </div>
  );
}

export default App;
