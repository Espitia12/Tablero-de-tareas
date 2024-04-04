import React, { useState } from 'react';
import './ItemTask.css';

export const ItemTask = ({ idTask, title, text,  state, condition, toggleState }) => {
  const [isChecked, setIsChecked] = useState(condition);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    toggleState(idTask, !isChecked ? 'state2' : 'state'); 
  };

  return (
    <li id={idTask}>
      <div className='containerCard'>
        <div className={state}></div>
        <div className='containergroup'>
          <div className='titleCard'>{title}:</div>
          <div className='textCard'>{text}</div>
        </div>
        <input onChange={handleCheckboxChange} checked={isChecked} type="checkbox" name="chek" className='chek' />
      </div>
    </li>
  );
};

