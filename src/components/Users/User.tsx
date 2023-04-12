import React from "react";
import userPhoto2 from "../../assets/images/userPhoto2.jpg";
import s from "./Users.module.css"
import {UsersInitialStateType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";


type UserType = {
    user: UsersInitialStateType
    followingInProgress: number[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

export const User = ({user, followingInProgress, follow, unFollow}: UserType) => {

    return <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                      <img src={user.photos.small ? user.photos.small : userPhoto2} className={s.userPhoto}
                           alt="usersImg"/>
                    </NavLink>

                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unFollow(user.id)
                        }}>UnFollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }}>Follow</button>}

                </div>
            </span>
        <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'el.location.country'}</div>
                    <div>{'el.location.city'}</div>
                </span>
            </span>
    </div>
}
