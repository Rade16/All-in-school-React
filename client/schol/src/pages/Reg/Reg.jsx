import './_reg.scss'
function Reg(props) {
    return (
        <>
            <div className="reg__container">
                <div className="form-ui">
                    <form action="" method="post" className="form">
                        <div className="form-body">
                            <div className="welcome-lines">
                                <div className="welcome-line-1">Регистрация</div>
                            </div>
                            <div className="input-area">
                                <div className="form-inp">
                                    <input placeholder="Фамилия" type="text"/>
                                </div>
                                <div className="form-inp">
                                    <input placeholder="Имя" type="text"/>
                                </div>
                                <div className="form-inp">
                                    <input placeholder="Отчество" type="password"/>
                                </div>
                                <div className="form-inp">
                                    <input placeholder="e-mail" type="password"/>
                                </div>
                                <div className="form-inp">
                                    <input placeholder="Пароль" type="password"/>
                                </div>
                            </div>
                            <div className="submit-button-cvr">
                                <button className="submit-button" type="submit">Login</button>
                            </div>
                            <div className="forgot-pass">
                                <a href="#">Forgot password?</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Reg;