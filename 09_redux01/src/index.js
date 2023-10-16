// Importing the necessary dependencies and components from React and other files
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import countReducer from './reducers/countReducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

// Creating a Redux store by using the 'countReducer' to manage application state
const store = createStore(countReducer);

// Creating a new React root element and rendering the inside application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();