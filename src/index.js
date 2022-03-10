import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Body from './components/Body';
import Mobile from './components/Mobile';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './style.css';

const root = document.querySelector('.root');

function renderApp(){
  return(
    <React.StrictMode>
      <Header />
      <Body />
      <Mobile />
    </React.StrictMode>
  );
}

ReactDOM.render(renderApp(), root);

reportWebVitals();
