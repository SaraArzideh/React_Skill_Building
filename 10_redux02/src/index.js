import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import contactReducer from './reducers/contactReducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

// Creating a Redux store using the contactReducer
const store = createStore(contactReducer);

// Creating a root element to render the React app into
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the app wrapped in React.StrictMode and the Redux Provider
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