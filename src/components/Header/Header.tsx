import React from 'react';
import s from './Header.module.css'
import headerPhoto from './../../assets/images/header.jpg'
import {NavLink} from "react-router-dom";

type HeaderType={
    login: string|null,
    isAuth: boolean
}

export const Header = (props: HeaderType) => {
    console.log(`login in Header ---- ${props.login}`)
    return (
        <header className={s.header}>
            <img src={headerPhoto}
                 alt="image"/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    );
};