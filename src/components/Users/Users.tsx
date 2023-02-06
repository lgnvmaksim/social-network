import React from "react";
import userPhoto2 from "../../assets/images/userPhoto2.jpg";
import s from "./Users.module.css"
import {UsersInitialStateType} from "../../redux/users-reducer";

type UsersType = {
    totalUsersCount: number
    pageSize: number,
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UsersInitialStateType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

export const Users = (props: UsersType) => {

    let pagesCount: number = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= 20; i++) { // если выведем pagesCount вместо 20, то будет более 20 тыс страниц
        pages.push(i)
    }


    return <div>
        <div>
            {pages.map(el => {
                    return <span onClick={(e) => {
                       props.onPageChanged(el)
                    }} className={props.currentPage === el ? s.selectedPage : ''}>{el}</span>
                }
            )}
        </div>
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
}
