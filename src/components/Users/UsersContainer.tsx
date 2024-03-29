import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    follow,
    requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unFollow,
    UsersInitialStateType
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalCount,
    getTotalUsersCount,
    getUsers
} from "../../redux/user-selectors";


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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        totalCount: getTotalCount(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export const UsersContainer = withAuthRedirect(connect(mapStateToProps, {
    setCurrentPage, toggleFollowingProgress,getUsers: requestUsers, follow, unFollow
})(UsersApiComponent))

