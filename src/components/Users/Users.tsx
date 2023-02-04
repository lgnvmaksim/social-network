import React from "react";
import userPhoto2 from "../../assets/images/userPhoto2.jpg";
import s from "./Users.module.css";
import {UsersContainerType} from "./UsersContainer";
import axios from "axios";
import {initialUsersStateType} from "../../redux/users-reducer";

export class Users extends React.Component<UsersContainerType> {

    componentDidMount() {
        axios.get<initialUsersStateType>('https://social-network.samuraijs.com/api/1.0/users').then(r => {
            this.props.setUsers(r.data.items)
        })
    }

    render() {
        return <div>
            {this.props.users.map(el => <div key={el.id}>
            <span>
                <div>
                    <img src={el.photos.small ? el.photos.small : userPhoto2} className={s.userPhoto} alt="usersImg"/>
                </div>
                <div>
                    {el.followed
                        ? <button onClick={() => this.props.unFollow(el.id)}>UnFollow</button>
                        : <button onClick={() => this.props.follow(el.id)}>Follow</button>}

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
}