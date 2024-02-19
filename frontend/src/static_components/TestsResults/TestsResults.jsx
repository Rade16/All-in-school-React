import React from "react";
import './testsResults.scss'
import {useEffect, useState} from "react";
import axios from "axios";

const TestsResults = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: `/test-result/${document.getElementById('root').getAttribute('data')}`
        }).then((response) => {
            setData(response.data)
        })
    }, []);

    return (
        <div className='tests__container'>
            <table>
                <tr>
                    <th className='column__name'>Фамилия Имя Отчество</th>
                    <th className='column__name'>Оценка</th>
                </tr>
                {
                    data.map((element) => {
                        return (
                            <tr>
                                <td>{element.username}</td>
                                <td>{element.mark}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default TestsResults