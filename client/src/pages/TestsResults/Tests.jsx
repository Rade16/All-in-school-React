import React from "react";
import './tests.scss'

const Tests = () => {
    return (
        <div className='tests__container'>
            <table>
                <tr>
                    <th className='column__name'>Фамилия Имя Отчество</th>
                    <th className='column__name'>Оценка</th>
                </tr>
                <tr>
                    <td>Гилоян</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Чижиков</td>
                    <td>5</td>
                </tr>
            </table>
        </div>
    )
}

export default Tests