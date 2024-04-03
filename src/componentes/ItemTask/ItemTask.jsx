import React from 'react'
import "./ItemTask.css"
export const ItemTask = ({ idTask,title,text,chekclick,state,condition}) => {
  return (
    <>
    <li id={idTask}>
        <div className='containerCard'>
          <div className={state}></div>
          <div className='containergroup'>
             <div className='titleCard'>{title}:</div>
             <div className='textCard'>{text}</div>
          </div>
          <input onChange={chekclick} checked={condition} type="checkbox" name="chek" id="chek" className='chek' />
        </div>
    </li>
    </>
  )
}
