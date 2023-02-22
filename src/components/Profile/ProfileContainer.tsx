import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {userId='2'}
       this.props.getUserProfile(userId)
    }
    render() {

        return <div>
            <Profile {...this.props}  profile={this.props.profile}/>
        </div>;
    }
}


type PropsType=RouteComponentProps<PathParamsType> & ProfileContainerType

type PathParamsType={
    userId: string
}



export type ProfileContainerType = MapDispatchToPropsProfileType & MapStateToPropsProfileType

type MapDispatchToPropsProfileType = {
    getUserProfile:(userId:string)=>void
}

type  MapStateToPropsProfileType = {
    profile: ProfileType
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsProfileType => ({
    profile: state.profilePage.profile,
})




export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer)))