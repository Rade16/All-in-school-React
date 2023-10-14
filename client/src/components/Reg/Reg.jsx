import {useState} from "react";
import "./_reg.scss";
import axios from "axios";

function Reg(props) {
    const [status, setNewStatus] = useState('')

    function signUp(event) {
        axios({
            method: "post",
            url: "/sign-up/",
            data: {
                second_name: document.getElementById('second_name').value,
                first_name: document.getElementById('first_name').value,
                last_name: document.getElementById('last_name').value,
                username: document.getElementById('username').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
            }
        }).then((response) => {
            setNewStatus(response.data.status)
        })

        event.preventDefault()
    }

    return (
        <div className="reg">
            <div className="reg__container">
                <div className="reg__form-ui">
                    <form className="reg__form">
                        <div className="reg__form-body">
                            <div className="reg__welcome-lines">
                                <div className="reg__welcome-line-1">Регистрация</div>
                                <p className="reg__welcome-line-2">{status}</p>
                            </div>
                            <div className="reg__input-area">
                                <div className="reg__form-inp">
                                    <input id="second_name" placeholder="Фамилия" type="text"/>
                                </div>
                                <div className="reg__form-inp">
                                    <input id="first_name" placeholder="Имя" type="text"/>
                                </div>
                                <div className="reg__form-inp">
                                    <input id="last_name" placeholder="Отчество" type="text"/>
                                </div>
                                <div className="reg__form-inp">
                                    <input id="username" placeholder="Логин" type="text"/>
                                </div>
                                <div className="reg__form-inp">
                                    <input id="email" placeholder="E-mail" type="email"/>
                                </div>
                                <div className="reg__form-inp">
                                    <input id="password" placeholder="Пароль" type="password"/>
                                </div>
                            </div>
                            <div className="reg__submit-button-cvr">
                                <button onClick={signUp} className="reg__submit-button">
                                    Зарегистрироваться
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Reg;
