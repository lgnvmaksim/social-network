import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {

        console.log(this.props,"this.props")
        let userId = this.props.match.params.userId
        console.log(userId)
        if (!userId) {userId='2'}
        axios.get<ProfileType>('https://social-network.samuraijs.com/api/1.0/profile/' + userId)   //Нужна ли тут типищация
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

type PropsType=RouteComponentProps<PathParamsType> & ProfileContainerType

type PathParamsType={
    userId: string
}

export type ProfileContainerType = MapDispatchToPropsProfileType & MapStateToPropsProfileType

type MapDispatchToPropsProfileType = {
    setUserProfile: (profile: ProfileType) => void
}

type  MapStateToPropsProfileType = {
    profile: ProfileType
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsProfileType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)