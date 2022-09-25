import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAPk5SsHlO0CT1AHFAJAFn7ehdfJqF2_uA",
  authDomain: "celularxpress-3a72a.firebaseapp.com",
  projectId: "celularxpress-3a72a",
  storageBucket: "celularxpress-3a72a.appspot.com",
  messagingSenderId: "261763483066",
  appId: "1:261763483066:web:a20fadc0889a874c178983"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
