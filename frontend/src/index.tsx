import React from 'react';
import ReactDOM from "react-dom/client"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// for previous react versions (17 and below)
/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

// for latest react versions (18+)
// ! operator is a non null assertion when you're sure this will never be null
// re: https://stackoverflow.com/a/63520829
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
