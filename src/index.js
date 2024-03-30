import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware,compose } from "redux";
import reducer from './Reducer';
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

const rootReducer = combineReducers({
   reducer
  });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
       
    </Provider>
  </React.StrictMode>
);


