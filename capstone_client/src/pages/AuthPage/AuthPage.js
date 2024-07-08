import "./AuthPage.scss";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";

const username = sessionStorage.getItem("username");

function AuthPage() {

    const navigate = useNavigate();
    const loggedIn = useAuth();
    
    if(loggedIn) {
        navigate(`/${username}`)
    }

    return (
        <>
        <LoginForm />
        <RegisterForm />
        </>
    )
}

export default AuthPage;