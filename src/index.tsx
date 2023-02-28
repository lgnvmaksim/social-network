import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import App, {AppContainer} from "./App";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
