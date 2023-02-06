import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    ActionUsersType,
    followAC,
    setCurrentPageAC,
    setUsersAC, setUsersTotalCountAC,
    unFollowAC,
    UsersInitialStateType
} from "../../redux/users-reducer";
import {Users} from "./Users";

export type UsersContainerType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    users: UsersInitialStateType[]
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    totalCount: number
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UsersInitialStateType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number)=> void
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalUsersCount
    }
}

const mapDispatchToProps = (dispatch: (action: ActionUsersType) => void): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: UsersInitialStateType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount)=>{
            dispatch(setUsersTotalCountAC(totalCount))
        }

    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

