import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ConTextProvider} from "./Context";
import {BrowserRouter as Router} from "react-router-dom";


ReactDOM.render(
    <ConTextProvider>
        <Router>
            <App />
        </Router>
    </ConTextProvider>,
    document.getElementById('root')
);
