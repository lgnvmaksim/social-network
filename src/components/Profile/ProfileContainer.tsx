import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {getStatusTC, getUserProfileTC, ProfileType, updateStatusTC} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '27802'
        }
        this.props.getUserProfile(userId)
        this.props.getStatusTC(userId)
    }

    render() {

        return <div>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatusTC={this.props.updateStatusTC}/>
        </div>;
    }
}


type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType

type PathParamsType = {
    userId: string
}


export type ProfileContainerType = MapDispatchToPropsProfileType & MapStateToPropsProfileType

type MapDispatchToPropsProfileType = {
    getUserProfile: (userId: string) => void
    getStatusTC: (userId: string) => void
    updateStatusTC: (status: string)=> void
}

type  MapStateToPropsProfileType = {
    profile: ProfileType
    status: string
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsProfileType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})


export default withAuthRedirect(connect(mapStateToProps, {getUserProfile: getUserProfileTC, getStatusTC, updateStatusTC})(withRouter(ProfileContainer)))