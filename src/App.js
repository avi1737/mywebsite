import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import CustomNavbar from './components/CustomNavbar';


function App() {
  return (
    <Router>
      <div>
        <CustomNavbar></CustomNavbar>
        <Route path='/' component={Home}></Route>
        <Route path='/About' component={About}></Route>
        <Route path='/News' component={News}></Route>
      </div>
    </Router>
  );
}

export default App;
