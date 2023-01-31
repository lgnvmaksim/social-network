import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {RootStateType} from "./redux/state";


export const App = (props: RootStateType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               dialogs={props.dialogsPage.dialogs}
                               messages={props.dialogsPage.messages}  />}/>
                    <Route path='/profile' render={() => <Profile posts={props.profilePage.posts}  messageForNewPost={props.profilePage.messageForNewPost} />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}
