import React, {useEffect, useState} from 'react'
import './_group.scss'
import {objectStudentsCards} from '../../Helpers/objectStudentsCards'
import StudentCard from '../../components/studentCard/StudentCard'
import axios from "axios";

const Group = () => {
    const [groupChat, setGroupChat] = useState('')
    const [users, setUsers] = useState([])

    useEffect(() => {
        getGroupOfUser()
        getGroupChat()
    }, []);

    function getGroupOfUser() {
        axios({
            method: 'get',
            url: '/get-group-of-user/'
        }).then((response) => {
            setUsers(response.data)
        })
    }

    function getGroupChat() {
        axios({
            method: 'get',
            url: '/get-site-info/'
        }).then((response) => {
            setGroupChat(response.data.url_to_telegram)
        })
    }

    return (
        <div className='group'>
            <div className="group__container">
                <h1 className='group__title'>Моя группа</h1>
                <div className="group__line">
                    {users.map((card, index) => {
                        return <StudentCard key={index} object={card}/>
                    })}
                </div>

                <a href={groupChat} className="group__createGroupChat">
                    Перейти в групповой чат
                </a>
            </div>
        </div>

    )
}

export default Group