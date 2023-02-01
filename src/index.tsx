import React from 'react';
import './index.css';
import {store} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';



const rerenderTree = () => {
    ReactDOM.render(
        <App store={store}  dispatch={store.dispatch.bind(store)}  />,
        document.getElementById('root')
    );
}


rerenderTree()
store.subscriber(rerenderTree)


