import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Router,Route,browserHistory} from 'react-router'
import Header from './Components/Header';
import Content from './Components/Content';
import Menu from './Components/Menu';
import Footer from './Components/Footer';

ReactDOM.render(
  <Router history ={browserHistory}>
  <Route path="/" component={App}/>
    <Route path="/Header" component={Header}/>
    <Route path="/Content" component={Content}/>
    <Route path="/Menu" component={Menu}/>
    <Route path="/Footer" component={Footer}/>
  
  
      </Router>,document.getElementById('root')
  );