import React from 'react';
import './index.css';
import {state, subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {RootStateType} from "./redux/state";


const rerenderTree = (state:RootStateType) => {
    ReactDOM.render(
        <App dialogsPage={state.dialogsPage} profilePage={state.profilePage}   />,
        document.getElementById('root')
    );
}


rerenderTree(state)
subscribe(rerenderTree)


