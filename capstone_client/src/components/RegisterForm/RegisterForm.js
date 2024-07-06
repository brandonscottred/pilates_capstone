import "./RegisterForm.scss";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

function RegisterForm() {
    const [ formInput, setFormInput ] = useState({})
    const [ newUser, setNewUser ] = useState({
        username:"",
        email:"",
        password:"",
    })

    const navigate = useNavigate();

    const handleInput = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormInput({ ...formInput, [name]: value });
    }

    const handleSubmit = async (event) => {

        event.preventDefault();

        try {
            const registerNewUser = {
                email: newUser.email,
                username: newUser.username,
                password: newUser.password,
            }
            const response = await axios.post(
                `${baseUrl}/auth/register`,
                registerNewUser
            )

            if (response.data.success) {
                const { username, token } = response.data;
                localStorage.setItem("jwt", token);
                navigate(`/home/${username}`)
            }
            
        } catch {

        }

    }

    return (
        <>
            <form className="registerForm" onSubmit={handleSubmit}>
                <div className="registerForm__fields">
                    <label htmlFor='email' className="registerForm__fields--label">Email</label>
                    <input 
                        className="registerForm__fields--input" 
                        name="email" 
                        placeholder="  Please enter your email address"
                        value={newUser.email}
                        onChange={handleInput} 
                    />
                    <label htmlFor='username' className="registerForm__fields--label">Username</label>
                    <input 
                        className="registerForm__fields--input" 
                        placeholder="  Choose a Username"
                        name="username" 
                        value={newUser.username}
                        onChange={handleInput} 
                    />
                    <label htmlFor='password' className="registerForm__fields--label">Password</label>
                    <input 
                        className="registerForm__fields--input" 
                        name="password" 
                        placeholder="  Choose a Password"
                        value={newUser.password}
                        onChange={handleInput} 
                    />
                </div>
                <div className="registerForm__buttons">
                    <button className="registerForm__buttons--submit" type='submit' onSubmit={handleSubmit}>
                        <span>Register New User</span>
                    </button>
                </div>
            </form>
        </>
    )
}

export default RegisterForm;