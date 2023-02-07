import React from "react";
import userPhoto2 from "../../assets/images/userPhoto2.jpg";
import s from "./Users.module.css"
import {UsersInitialStateType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersType = {
    totalUsersCount: number
    pageSize: number,
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UsersInitialStateType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: number[]
}

export const Users = (props: UsersType) => {

    let pagesCount: number = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= 20; i++) { // если выведем pagesCount вместо 20, то будет более 20 тыс страниц
        pages.push(i)
    }


    return <div>
        <div>
            {pages.map((el, index) => {
                    return <span key={index} onClick={(e) => {
                       props.onPageChanged(el)
                    }} className={props.currentPage === el ? s.selectedPage : ''}>{el}</span>
                }
            )}
        </div>
        {props.users.map(el => <div key={el.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + el.id}>
                      <img src={el.photos.small ? el.photos.small : userPhoto2} className={s.userPhoto} alt="usersImg"/>
                    </NavLink>

                </div>
                <div>
                    {el.followed
                        ? <button disabled={props.followingInProgress.some(id=>id===el.id)} onClick={() => {
                            props.toggleFollowingProgress(true, el.id)
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': 'b4d8e782-12a1-4cd0-86dd-a8ec637b9008'
                                }
                            })
                                .then(r => {
                                    if (r.data.resultCode===0) {
                                        props.unFollow(el.id)
                                    }
                                    props.toggleFollowingProgress(false, el.id)
                                })


                        }}>UnFollow</button>
                        : <button disabled={props.followingInProgress.some(id=>id===el.id)} onClick={() => {
                            props.toggleFollowingProgress(true, el.id)
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': 'b4d8e782-12a1-4cd0-86dd-a8ec637b9008'
                                }
                            })
                                .then(r => {
                                  if (r.data.resultCode===0) {
                                      props.follow(el.id)
                                  }
                                    props.toggleFollowingProgress(false, el.id)
                                })

                        }}>Follow</button>}

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
