import './_auth.scss'

function Auth(props) {
    return (
        <>
            <div className="auth__container">

                <div className="form-ui">
                    <form action="" method="post" className="form">
                        <div className="form-body">
                            <div className="welcome-lines">
                                <div className="welcome-line-1">All in school</div>
                                <div className="welcome-line-2">Welcome Back, Loyd</div>
                            </div>
                            <div className="input-area">
                                <div className="form-inp">
                                    <input placeholder="Email Address" type="text"/>
                                </div>
                                <div className="form-inp">
                                    <input placeholder="Password" type="password"/>
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

export default Auth;