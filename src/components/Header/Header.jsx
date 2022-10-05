import React from 'react';
import s from './Header.module.css';


const header = ()=> {
  return (
    <div className={s.header}>
    
      <img className={s.Header__img} src='https://vashobereg.ru/wp-content/uploads/2018/07/Znak_Zvezda_Haosa-1.jpg' alt='Chaos is everywhere'></img>
   
    </div>)
    }
    export default header;