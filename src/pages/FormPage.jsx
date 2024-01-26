import React from "react";

import ActivityForm from '../components/Form.jsx';
import { Link } from 'react-router-dom';


const FormPage = () => {


  return(
    <div className="container">
      <div className="content__top"> 
      {/* Добавление чего то в хедер меню или модальное окно */}
      </div>
      <div className="content__items">
        <h1>Заполните ваш типичный день </h1>
      </div>
      <ActivityForm />
      <div className="content__button"> 
        <Link to="/" class="button">
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Вернуться назад</span>
        </Link>
      </div> 
    </div>
      
  )
  }

  export default FormPage