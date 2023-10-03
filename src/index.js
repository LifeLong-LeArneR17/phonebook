import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import {store} from "./redux/store"
import { Provider } from 'react-redux';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='phonebook'>
   <Provider store = {store}> 
     <App />
   </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
