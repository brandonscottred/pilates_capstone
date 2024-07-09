import "./LoginForm.scss";
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;


function LoginForm() {

    const formRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = formRef.current;
        const username = form.username.value;
        const password = form.password.value;

        const loginUser = {
            username: username,
            password: password,
        }

        if (!username || !password) { alert('All fields must be valid') } 

        try {
            axios.post(`${baseUrl}/auth/login`, loginUser)
            .then(response => {
            const { username, token } = response.data;
            console.log(username, token)
            sessionStorage.authToken = token;
            sessionStorage.username = username;
            navigate(`/${username}`);
            })
        } catch (error) {
            console.error('Login Failed', error.message)
        }
    }

    return (
        <>
        <form className="loginForm" ref={formRef}>
            <div className="loginForm__fields">
                <label htmlFor='username' className="loginForm__fields--label">Username</label>
                <input 
                    className="loginForm__fields--input" 
                    placeholder="  Choose a Username"
                    name="username" 
                    type='text'
                />
                <label htmlFor='password' className="loginForm__fields--label">Password</label>
                <input 
                    className="loginForm__fields--input" 
                    name="password" 
                    placeholder="  Choose a Password"
                    type='text' 
                />
            </div>
            <div className="loginForm__buttons">
                <button className="loginForm__buttons--submit" type='submit' onClick={handleSubmit}>
                    <span>Login</span>
                </button>
            </div>
        </form>
        </>
    )
}

export default LoginForm;