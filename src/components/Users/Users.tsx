import React from 'react';
import {UsersContainerType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import userPhoto2 from './../../assets/images/userPhoto2.jpg'
import {initialUsersStateType} from "../../redux/users-reducer";

export const Users = (props: UsersContainerType) => {
    if (props.users.length===0){
        props.setUsers([
            // {
            //     id: 1,
            //     photos: {
            //         small: '',
            //         large: ''
            //     },
            //     followed: true,
            //     name: 'Max',
            //     status: 'I am a boss',
            //     location: {city: 'Minsk', country: 'Belarus'}
            // },
            // {
            //     id: 2,
            //     photos: {
            //         small: '',
            //         large: ''
            //     },
            //     followed: false,
            //     name: 'Nika',
            //     status: 'I am a boss-wife',
            //     location: {city: 'Moscow', country: 'Russia'}
            // },
            // {
            //     id: 3,
            //     photos: {
            //         small: '',
            //         large: ''
            //     },                followed: false,
            //     name: 'Sonya',
            //     status: 'I am a boss-child',
            //     location: {city: 'Kiev', country: 'Ukraine'}
            // },
        ])
    }

    axios.get<initialUsersStateType>('https://social-network.samuraijs.com/api/1.0/users').then(r => {
        props.setUsers(r.data.items)
    })

    return <div>
        {props.users.map(el => <div key={el.id}>
            <span>
                <div>
                    <img src={el.photos.small ? el.photos.small : userPhoto2} className={s.userPhoto} alt="usersImg"/>
                </div>
                <div>
                    {el.followed
                        ? <button onClick={() => props.unFollow(el.id)}>UnFollow</button>
                        : <button onClick={() => props.follow(el.id)}>Follow</button>}

                </div>
            </span>
            <span>
                <span>
                    <div>{el.name}</div>
                    <div>{el.status}</div>
                </span>
                <span>
                    <div>{'el.location.country'}</div>
                    <div>{'el.location.city'}</div>
                </span>
            </span>
        </div>)}
    </div>
};