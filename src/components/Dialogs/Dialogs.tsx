import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={`${s.dialog} ${s.active}`}>
                  <NavLink to='/dialogs/1'>Max</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Veronika</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Sofia</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Who are you</div>
                <div className={s.message}>Fuck off</div>
            </div>
        </div>
    );
};