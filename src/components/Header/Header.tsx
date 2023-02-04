import React from 'react';
import s from './Header.module.css'
import headerPhoto from './../../assets/images/header.jpg'

export const Header = () => {
    return (
        <header className={s.header}>
            <img src={headerPhoto}
                 alt="image"/>
        </header>
    );
};