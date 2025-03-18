import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../client/redux/store.js";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
