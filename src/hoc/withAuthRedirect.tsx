import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {AppRootStateType} from "../redux/redux-store";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state: AppRootStateType): MapStateToPropsForRedirectProfileType => ({
    isAuth: state.auth.isAuth
})

type MapStateToPropsForRedirectProfileType={
    isAuth: boolean
}

export function withAuthRedirect <T>(Component: ComponentType<T>)  {
    function RedirectComponent(props: MapStateToPropsForRedirectProfileType) {
        let {isAuth, ...restProps} = props
        // if (!props.isAuth) return <Redirect to={'login'}/> //Редирект кривой какой-то, все время на логин кидает
        return <Component {...restProps as T}/>
    }



return connect(mapStateToPropsForRedirect)(RedirectComponent)

}