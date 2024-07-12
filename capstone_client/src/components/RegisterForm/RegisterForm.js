import "./RegisterForm.scss";
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

function RegisterForm() {

    const formRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = formRef.current;
        const email = form.email.value;
        const username = form.username.value;
        const password = form.password.value;

        const registerNewUser = {
            email: email,
            username: username,
            password: password,
        }

        if (!email || !username || !password) { alert('All fields must be valid') } 

        try {
            axios.post(`${baseUrl}/auth/register`,registerNewUser)
            .then(response => {
            const { username, token } = response.data;
            console.log(username, token)
            sessionStorage.authToken = token;
            navigate(`/home/${username}`);
            alert(`${username} has successfully been registered`)
            })
        } catch (error) {
            console.log('error submitting form')
        }
    }

    return (
        <>
            <form className="registerForm" ref={formRef}>
                <div className="registerForm__fields">
                    <label htmlFor='email' className="registerForm__fields--label">Email</label>
                    <input 
                        className="registerForm__fields--input" 
                        name="email" 
                        placeholder="  Please enter your email address"
                        type='text'
                    />
                    <label htmlFor='username' className="registerForm__fields--label">Username</label>
                    <input 
                        className="registerForm__fields--input" 
                        placeholder="  Choose a Username"
                        name="username" 
                        type='text'
                    />
                    <label htmlFor='password' className="registerForm__fields--label">Password</label>
                    <input 
                        className="registerForm__fields--input" 
                        name="password" 
                        placeholder="  Choose a Password"
                        type='text' 
                    />
                </div>
                <div className="registerForm__buttons">
                    <button className="registerForm__buttons--submit" type='submit' onClick={handleSubmit}>
                        <span>Register New User</span>
                    </button>
                </div>
            </form>
        </>
    )
}

export default RegisterForm;