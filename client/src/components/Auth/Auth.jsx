import "./_auth.scss";
import {useState} from "react";
import axios from "axios";

function Auth(props) {
    const [status, setNewStatus] = useState('')

    function signIn(event) {
        axios({
            method: 'post',
            url: '/sign-in/',
            data: {
                username: document.getElementById('auth_username').value,
                password: document.getElementById('auth_password').value,
            }
        }).then((response) => {
            setNewStatus(response.data.status)

            if (response.data.status === 'ok'){
                window.location.reload()
            }
        })
        event.preventDefault()
    }

    return (
        <>
            <div className="auth">
                <div className="auth__container">
                    <div className="auth__form-ui">
                        <form className="auth__form">
                            <div className="auth__form-body">
                                <div className="auth__welcome-lines">
                                    <div className="auth__welcome-line-1">All in school</div>
                                    <div className="auth__welcome-line-2">Добро пожаловать!</div>
                                    <p className="auth__welcome-line-2">{status}</p>
                                </div>
                                <div className="auth__input-area">
                                    <div className="auth__form-inp">
                                        <input id="auth_username" placeholder="Логин" type="text"/>
                                    </div>
                                    <div className="auth__form-inp">
                                        <input id="auth_password" placeholder="Пароль" type="password"/>
                                    </div>
                                </div>
                                <div className="auth__submit-button-cvr">
                                    <button onClick={signIn} className="auth__submit-button">
                                        Войти
                                    </button>
                                </div>
                                <div className="auth__forgot-pass">
                                    <a href="#">Забыли пароль?</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Auth;
