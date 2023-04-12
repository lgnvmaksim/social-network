import React from "react";
import {UsersInitialStateType} from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

type UsersType = {
    totalUsersCount: number
    pageSize: number,
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UsersInitialStateType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    followingInProgress: number[]
}

export const Users = (props: UsersType) => {


    return <div>
        <Paginator currentPage={props.currentPage}
                   totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   portionSize={10}
                   onPageChanged={props.onPageChanged}/>
        {props.users.map(el => <User
            key={el.id}
            user={el}
            followingInProgress={props.followingInProgress}
            follow={props.follow}
            unFollow={props.unFollow}/>
        )}
    </div>
}
