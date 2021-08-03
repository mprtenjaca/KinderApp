import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import DataProvider from './redux/store.js';

import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <DataProvider>
            <App />
        </DataProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

