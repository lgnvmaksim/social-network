import {AppRootStateType} from "./redux-store";

export const getUsers = (state: AppRootStateType) => {
    return  state.usersPage.items
}

export const getPageSize = (state: AppRootStateType) => {
    return  state.usersPage.pageSize
}
export const getTotalUsersCount = (state: AppRootStateType) => {
    return  state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppRootStateType) => {
    return  state.usersPage.currentPage
}
export const getTotalCount = (state: AppRootStateType) => {
    return  state.usersPage.totalCount
}
export const getIsFetching = (state: AppRootStateType) => {
    return  state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppRootStateType) => {
    return  state.usersPage.followingInProgress
}

