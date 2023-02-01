import React from 'react';
import './index.css';

import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";


const rerenderTree = () => {

    ReactDOM.render(
        <Provider store={store}>
            <App dispatch={store.dispatch.bind(store)}/>,
        </Provider>,
        document.getElementById('root')
    );
}

rerenderTree()
store.subscribe(rerenderTree)

