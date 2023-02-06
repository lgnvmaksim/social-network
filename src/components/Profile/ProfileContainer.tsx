import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {initialUsersStateType} from "../../redux/users-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        axios.get<initialUsersStateType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(r => {
                this.props.setUserProfile(r.data)

            })
    }

    render() {
        return <div>
            <Profile {...this.props}  profile={this.props.profile}/>
        </div>;
    }
}

export type ProfileContainerType = MapDispatchToPropsProfileType & MapStateToPropsProfileType

type MapDispatchToPropsProfileType = {
    setUserProfile: (profile: any) => void
}

type  MapStateToPropsProfileType = {
    profile: ProfileType
}

let mapStateToProps = (state: AppRootStateType) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)