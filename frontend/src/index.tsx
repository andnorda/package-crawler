import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Home from './pages/home/Home';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <div className="app">
            <Home />
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
