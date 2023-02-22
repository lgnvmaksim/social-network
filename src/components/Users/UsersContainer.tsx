import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    follow,
    followSuccess,
    getUsers,
    setCurrentPage,
    toggleFollowingProgress, unFollow,
    UsersInitialStateType
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class UsersApiComponent extends React.Component<UsersContainerType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                followingInProgress={this.props.followingInProgress}

            />
        </>

    }
}

export type UsersContainerType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    users: UsersInitialStateType[]
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    totalCount: number,
    isFetching: boolean,
    followingInProgress: number[]
}

type mapDispatchToPropsType = {
    setCurrentPage: (pageNumber: number) => void
    getUsers: (currentPage: number, pageSize: number)=>void
    follow: (userId: number)=>void
    unFollow: (userId: number)=>void
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = withAuthRedirect(connect(mapStateToProps, {
    setCurrentPage, toggleFollowingProgress,getUsers, follow, unFollow
})(UsersApiComponent))

