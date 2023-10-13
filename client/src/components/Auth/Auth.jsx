import "./_auth.scss";

function Auth(props) {
  return (
    <>
      <div className="auth">
        <div className="auth__container">
          <div className="auth__form-ui">
            <form action="" method="post" className="auth__form">
              <div className="auth__form-body">
                <div className="auth__welcome-lines">
                  <div className="auth__welcome-line-1">All in school</div>
                  <div className="auth__welcome-line-2">Welcome Back, Loyd</div>
                </div>
                <div className="auth__input-area">
                  <div className="auth__form-inp">
                    <input placeholder="Email Address" type="text" />
                  </div>
                  <div className="auth__form-inp">
                    <input placeholder="Пароль" type="password" />
                  </div>
                </div>
                <div className="auth__submit-button-cvr">
                  <button className="auth__submit-button" type="submit">
                    Login
                  </button>
                </div>
                <div className="auth__forgot-pass">
                  <a href="#">Forgot password?</a>
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
