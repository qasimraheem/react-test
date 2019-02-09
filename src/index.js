import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from 'components/App';


ReactDOM.render(
    <div>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </div>,
    document.querySelector('#root')
);