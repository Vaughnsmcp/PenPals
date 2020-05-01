import React from 'react';
import LoginForm from '../components/LoginForm';
import Header from '../components/Header';

function Login() {
    return (
        <>
        <Header message={"Login"}/>
        <LoginForm/>
        </>
    );
}
export default Login;