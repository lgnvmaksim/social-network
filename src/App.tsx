import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {ActionType} from "./redux/store";
import {AppRootStateType} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


type AppPropsType=  {
    dispatch: (action: ActionType)=>void
    store: AppRootStateType

}

export const App = (props: AppPropsType) => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer
                               dialogsPage={props.store.dialogsPage}/>}/>
                    <Route path='/profile' render={() => <Profile profilePage={props.store.profilePage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}
