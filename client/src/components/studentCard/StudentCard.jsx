import React from 'react'
import './_studentCard.scss'
const StudentCard = ({object}) => {
  return (
    <div className='studentCard'>
      <div className="studentCard__container">
        <img src={object.avatar} alt="" className='studentCard__avatar'/>
        <h1 className='studentCard__fullName'>{object.name}</h1>
        <p className="studentCard__role">{object.role}</p> 
        <a href="#"><div className="studentCard__button">Перейти в чат</div></a>
      </div>
    </div>
  )
}

export default StudentCard