import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {logoutTC} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component<AuthType> {
    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth} logout={this.props.logout}/>
    }
}

export type AuthType = mapDispatchToPropsType & mapStateToPropsType

type mapDispatchToPropsType = {
    logout: ()=>void
}

export type mapStateToPropsType = {
    isAuth: boolean,
    login: string | null
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect(mapStateToProps, {logout: logoutTC})(HeaderContainer)