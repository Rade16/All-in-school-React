import React from "react";
import './tests.scss'

const Tests = () => {
    return (
        <div className='tests__container'>
            <div className="test__header">
                <form>
                    <h2>Тесты</h2>
                    <input className='test__header__search' type='text' placeholder='Название теста' id='test-search'/>
                    <button type='button'>Найти</button>
                </form>
            </div>
            <main className='test__main'>
                <ul>
                    <li className='test__box'>
                        <h3>Питон топ</h3>
                        <a href=''>Посмотреть</a>
                    </li>
                </ul>
            </main>
        </div>
    )
}

export default Tests