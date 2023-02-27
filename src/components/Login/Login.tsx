import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../ulils/validators/validators";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../redux/redux-store";


type FormDataType={
    password: string
    email: string
    rememberMe: boolean
}




const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Email'} name={'email'} component={Input} validate = {[required]}/>
        </div>
        <div>
            <Field placeholder={'Password'} name={'password'} component={Input} validate = {[required]} type={'password'}/>
        </div>
        <div>
            <Field type={'checkbox'}  component={Input} name={'remember me'}/> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

type LoginPropsType = mapStateToPropsType & {
    login:  (email: string, password: string, rememberMe: boolean)=>void

}
const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        console.log(props)
        props.login(formData.email, formData.password, formData.rememberMe)
    }
     if (props.isAuth){
       return <Redirect to={'/profile'}/>
     }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

type mapStateToPropsType = {
    isAuth: boolean,

}
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export default (connect(mapStateToProps, {login: loginTC}))(Login)


