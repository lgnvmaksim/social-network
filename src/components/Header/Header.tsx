import React from 'react';
import s from './Header.module.css'
import headerPhoto from './../../assets/images/header.jpg'
import {NavLink} from "react-router-dom";

type HeaderType={
    login: string|null,
    isAuth: boolean
    logout: ()=>void
}

export const Header = (props: HeaderType) => {
    return (
        <header className={s.header}>
            <img src={headerPhoto}
                 alt="image"/>
            <div className={s.loginBlock}>
                {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    );
};