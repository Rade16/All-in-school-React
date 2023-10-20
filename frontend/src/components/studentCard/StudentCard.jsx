import React from 'react'
import './_studentCard.scss'
const StudentCard = ({object}) => {
  return (
    <div className='studentCard'>
      <div className="studentCard__container">
        <img src={object.photo} alt="" className='studentCard__avatar'/>
        <h1 className='studentCard__fullName'>{`${object.second_name} ${object.first_name} ${object.last_name}`}</h1>
        <p className="studentCard__role">{object.type}</p>
        <a href={object.telegram}><div className="studentCard__button">Перейти в чат</div></a>
      </div>
    </div>
  )
}

export default StudentCard