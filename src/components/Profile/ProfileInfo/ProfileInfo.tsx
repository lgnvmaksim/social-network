import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return <div>
        <img src="https://weblinks.ru/wp-content/uploads/2022/08/0d6de7af1701b7f6ff551d4474ced401-730x578.jpeg"
             alt="background"/>
        <div className={s.descriptionBlock}>
            ava+description
        </div>
    </div>
};