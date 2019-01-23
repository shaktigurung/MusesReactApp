import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import configureStore from "./store";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";


ReactDOM.render(
     <Provider store={configureStore()}>
          <App />
     </Provider>,
     document.getElementById('root'));


