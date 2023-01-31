import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {StoreType} from "./redux/state";

type AppPropsType={
    store:StoreType
    addPost: (postMessage: string) => void
    changeNewText:(newText: string)=>void
}

export const App = (props: AppPropsType) => {
    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               dialogs={state.dialogsPage.dialogs}
                               messages={state.dialogsPage.messages}/>}/>
                    <Route path='/profile' render={() => <Profile posts={state.profilePage.posts}
                                                                  messageForNewPost={state.profilePage.messageForNewPost}
                                                                  addPost={props.addPost}
                                                                  changeNewText={props.changeNewText}

                    />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}
