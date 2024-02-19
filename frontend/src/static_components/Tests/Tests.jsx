import React from "react";
import './tests.scss'
import axios from "axios";
import {useState, useEffect} from "react";

const Tests = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getTests()
    }, []);

    function getTests(){
        axios({
            method: 'post',
            url: '/get-tests/',
            data: {
                name: document.getElementById('test-search').value
            },
            xsrfCookieName: 'csrftoken',
            xsrfHeaderName: 'X-CSRFTOKEN',
            withCredentials: true
        }).then((response) => {
            setData(response.data)
        })
    }

    return (
        <div className='tests__container'>
            <div className="test__header">
                <form>
                    <h2>Тесты</h2>
                    <input className='test__header__search' type='text' placeholder='Название теста' id='test-search'/>
                    <button type='button' onClick={getTests}>Найти</button>
                </form>
            </div>
            <main className='test__main'>
                <ul>
                    {data.map((element) => {
                        return (
                            <li className='test__box'>
                                <h3>{element.name}</h3>
                                <a href={`${element.id}`}>Посмотреть</a>
                            </li>
                        )
                    })}
                </ul>
            </main>
        </div>
    )
}

export default Tests