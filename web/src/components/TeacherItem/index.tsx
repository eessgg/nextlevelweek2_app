import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8IzSdPiZXi39TFFIoA2FU_JseySlMftKnZQ&usqp=CAU" alt="ne" />
        <div>
          <strong>Ester</strong>
          <span>Quimica</span>
        </div>
      </header>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure accusantium deleniti.</p>

      <footer>
        <p>Preço/hora <strong>R$ 80,00</strong></p>
        <button type="button">
          <img src={whatsappIcon} alt="whats" />
            Entrar em contato
          </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
