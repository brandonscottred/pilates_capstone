import "./AuthPage.scss";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import { useEffect } from 'react';

const username = sessionStorage.getItem("username");

function AuthPage() {

    const navigate = useNavigate();
    const loggedIn = useAuth();
    
    useEffect(() => {
        if(loggedIn) {
        navigate(`/${username}`)
    }}, [loggedIn])

    return (
        <>
        <LoginForm />
        <RegisterForm />
        </>
    )
}

export default AuthPage;