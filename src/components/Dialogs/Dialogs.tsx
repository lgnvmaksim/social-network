import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={`${s.dialog} ${s.active}`}>
                    Max
                </div>
                <div className={s.dialog}>
                    Veronika
                </div>
                <div className={s.dialog}>
                    Sofia
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