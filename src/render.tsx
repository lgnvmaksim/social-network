import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {RootStateType} from "./redux/state";



export const rerenderTree = (state:RootStateType) => {
    ReactDOM.render(
        <App dialogsPage={state.dialogsPage} profilePage={state.profilePage}   />,
        document.getElementById('root')
    );
}

