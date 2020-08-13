import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day"/>
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time"/>
          </div>
        </form>
      </PageHeader>

      <main>
        <article className="teacher-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/50669648?s=460&u=aa382f2fbb227a2a68a2f3c157bf5d6e6d152ea4&v=4" alt="Anna Flávia Castro"/>
            <div>
              <strong>Anna Flávia Castro</strong>
              <span>Matemática</span>
            </div>
          </header>

          <p>
            Entusiasta das melhores tecnologias de matemática avançada.
            <br />
            Apaixonada por resolver problemas matemáticos e por mudar a vida das pessoas através de soluções. Mais de 200.000 pessoas já se beneficiaram das minhas soluções.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 50,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="WhatsApp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
      </main>
    </div>
  );
}

export default TeacherList;
