import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {ActionType} from "./redux/store";
import {AppRootStateType, store} from "./redux/redux-store";


type AppPropsType={
    dispatch: (action: ActionType)=>void

}

export const App = (props: AppPropsType) => {
   let state = store.getState()

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               newMessageBody={state.dialogsPage.newMessageBody}
                               dialogs={state.dialogsPage.dialogs}
                               messages={state.dialogsPage.messages}
                               dispatch={props.dispatch}/>}/>
                    <Route path='/profile' render={() => <Profile posts={state.profilePage.posts}
                                                                  messageForNewPost={state.profilePage.messageForNewPost}
                                                                  dispatch={props.dispatch}

                    />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}
