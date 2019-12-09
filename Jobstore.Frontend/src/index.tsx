import React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import configureStore from './store';
import App from './App';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;


const store = configureStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
