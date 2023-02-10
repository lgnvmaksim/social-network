import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {getAuthUserData} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component<AuthType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth}/>
    }
}

export type AuthType = mapDispatchToPropsType & mapStateToPropsType

type mapDispatchToPropsType = {
    getAuthUserData: () => void
}

export type mapStateToPropsType = {
    isAuth: boolean,
    login: string | null
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)