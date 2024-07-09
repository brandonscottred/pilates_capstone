import "./AuthPage.scss";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import LoginForm from "../../components/LoginForm/LoginForm";

function AuthPage() {

    return (
        <div className="auth-page">
            <div className="auth-container">
                <LoginForm />
                <div className="form-divider">
                    <span className="form-divider__text">or</span>
                </div>
                <RegisterForm />
            </div>
        </div>
    )
}

export default AuthPage;