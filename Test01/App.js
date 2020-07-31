import React from 'react';
import './App.css'


const FormButton = props => (
  <div id="button" class="row">
    <button>{props.title}</button>
  </div>
  );

export default function App() {
  return (
    <div className="console-align" align = "center">
      <a href="/Header"><FormButton title="Home"/></a>
      <a href="/Menu"><FormButton title="Menu"/></a>
      <a href="/Content"><FormButton title="Content"/></a>      
      <a href="/Footer"><FormButton title="Footer"/></a>
    </div>
  )
}
