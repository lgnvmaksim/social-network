import React from 'react';
import {UsersContainerType} from "./UsersContainer";
import s from './Users.module.css'

export const Users = (props: UsersContainerType) => {
    if (props.users.length===0){
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://cdn.dribbble.com/users/5982351/screenshots/14764310/media/2b5664cbfbd8b3f5447710760472228f.png?compress=1&resize=400x300&vertical=top',
                followed: true,
                fullName: 'Max',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://cdn.dribbble.com/users/5982351/screenshots/14764310/media/2b5664cbfbd8b3f5447710760472228f.png?compress=1&resize=400x300&vertical=top',
                followed: false,
                fullName: 'Nika',
                status: 'I am a boss-wife',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://cdn.dribbble.com/users/5982351/screenshots/14764310/media/2b5664cbfbd8b3f5447710760472228f.png?compress=1&resize=400x300&vertical=top',
                followed: false,
                fullName: 'Sonya',
                status: 'I am a boss-child',
                location: {city: 'Kiev', country: 'Ukraine'}
            },])
    }

    return <div>
        {props.users.map(el => <div key={el.id}>
            <span>
                <div>
                    <img src={el.photoUrl} className={s.userPhoto} alt="usersImg"/>
                </div>
                <div>
                    {el.followed
                        ? <button onClick={() => props.unFollow(el.id)}>UnFollow</button>
                        : <button onClick={() => props.follow(el.id)}>Follow</button>}

                </div>
            </span>
            <span>
                <span>
                    <div>{el.fullName}</div>
                    <div>{el.status}</div>
                </span>
                <span>
                    <div>{el.location.country}</div>
                    <div>{el.location.city}</div>
                </span>
            </span>
        </div>)}
    </div>
};