import React from 'react'
import './_group.scss'
import { objectStudentsCards } from '../../Helpers/objectStudentsCards'
import StudentCard from '../../components/studentCard/StudentCard'
const Group = () => {
  return (
    <div className='group'>
      <div className="group__container">
        <h1 className='group__title'>Моя группа</h1>
        <div className="group__line">
          {objectStudentsCards.map((card, index) => {
            return  <StudentCard key={index} object={card}/>
          })}
        </div>

        <div className="group__createGroupChat">
        Создать групповой чат
        </div>
      </div>
    </div>

  )
}

export default Group