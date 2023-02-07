import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {DataAuthType, DataInsideType, setAuthUserData} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component<AuthType> {

    componentDidMount() {
        axios.get<DataAuthType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(r => {
                if (r.data.resultCode===0) {
                    let {id, email, login} = r.data.data
                    this.props.setAuthUserData({id, email, login})
                }
            })
    }

    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth}/>
    }
}

export type AuthType = mapDispatchToPropsType & mapStateToPropsType

type mapDispatchToPropsType = {
    setAuthUserData: (args: DataInsideType)=>void
}

export type mapStateToPropsType ={
    isAuth: boolean,
    login: string | null
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.data.data.login
})




export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)