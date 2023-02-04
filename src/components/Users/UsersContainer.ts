import {connect} from "react-redux";
import {Users} from "./Users";
import {AppRootStateType} from "../../redux/redux-store";
import {ActionUsersType, followAC, setUsersAC, unFollowAC, UsersInitialStateType} from "../../redux/users-reducer";

export type UsersContainerType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    users: UsersInitialStateType[]
}

type mapDispatchToPropsType={
    follow: (userId: number)=>void
    unFollow: (userId: number)=>void
    setUsers: (users: UsersInitialStateType[])=>void
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: (action: ActionUsersType) => void):mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: UsersInitialStateType[])=>{
            dispatch(setUsersAC(users))
        }
    }
    }


    export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

