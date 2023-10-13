import { useState } from 'react';
import './_profile.scss';

function Profile(props) {
  const btn = document.querySelectorAll('.profile__button');

  btn.forEach((btns) => {
    btns.addEventListener('click', () => {
      document
        .querySelector('.profile__button--active')
        ?.classList.remove('profile__button--active');
      btns.classList.add('profile__button--active');
    });
  });
  return (
    <>
      <div className='profile'>
        <div className='profile__container'>
          <div className='profile__form'>
            <h1 className='Profile__title'>Профиль</h1>
            <form action=''>
              <div className='profile__form-input'>
                <p className='profile__form-input-text'>Фамилия*</p>
                <input placeholder='' type='text' className='profile__form-input-field' />
              </div>
              <div className='profile__form-input'>
                <p className='profile__form-input-text'>Имя*</p>
                <input placeholder='' type='text' className='profile__form-input-field' />
              </div>
              <div className='profile__form-input'>
                <p className='profile__form-input-text'>Отчество*</p>
                <input placeholder='' type='text' className='profile__form-input-field' />
              </div>
              <div className='profile__form-input'>
                <p className='profile__form-input-text'>Номер*</p>
                <input placeholder='' type='number' className='profile__form-input-field' />
              </div>
              <div className='profile__form-input'>
                <p className='profile__form-input-text'>E-mail*</p>
                <input placeholder='' type='email' className='profile__form-input-field' />
              </div>
              <button className='profile__form-button'>Редактировать данные</button>
            </form>
          </div>
          <div className='profile__form2'>
            <div className='profile__upload-photo'></div>
            <h1 className='profile__form-input-text'>Пол*</h1>
            <div className='profile__buttons-line'>
              <div className='profile__button'>Мужской</div>
              <div className='profile__button'>Женский</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
