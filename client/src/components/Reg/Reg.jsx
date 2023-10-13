import "./_reg.scss";
function Reg(props) {
  return (

      <div className="reg">
        <div className="reg__container">
          <div className="reg__form-ui">
            <form action="" method="post" className="reg__form">
              <div className="reg__form-body">
                <div className="reg__welcome-lines">
                  <div className="reg__welcome-line-1">Регистрация</div>
                </div>
                <div className="reg__input-area">
                  <div className="reg__form-inp">
                    <input placeholder="Фамилия" type="text" />
                  </div>
                  <div className="reg__form-inp">
                    <input placeholder="Имя" type="text" />
                  </div>
                  <div className="reg__form-inp">
                    <input placeholder="Отчество" type="text" />
                  </div>
                  <div className="reg__form-inp">
                    <input placeholder="Логин" type="text" />
                  </div>
                  <div className="reg__form-inp">
                    <input placeholder="Пароль" type="password" />
                  </div>
                </div>
                <div className="reg__submit-button-cvr">
                  <button className="reg__submit-button" type="submit">
                    Login
                  </button>
                </div>
                <div className="reg__forgot-pass">
                  <a href="#">Forgot password?</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

  );
}

export default Reg;
