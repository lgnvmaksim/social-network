import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {MainType} from "./index";


export const App = (props: MainType) => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs dialogsItem={props.dialogs} messages={props.messages}/>}/>
                    <Route path='/profile' render={() => <Profile myPosts={props.posts}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}
