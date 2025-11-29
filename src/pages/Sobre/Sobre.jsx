import React from 'react';
// Importei FaPlaneDeparture (Avião) e FaPalette (Paleta)
import { FaCheckCircle, FaUsers, FaLaptopCode, FaBullseye, FaPlaneDeparture, FaPalette } from 'react-icons/fa';
import './Sobre.css';

function Sobre() {
  return (
    <div className="sobre-page">
      
      {/* SEÇÃO 1: HERO (Imagem de Fundo) */}
      <section className="sobre-hero">
        <div className="sobre-overlay"> {/* Camada escura igual da Home */}
          <div className="container">
            <h1>
              Sobre o TripFlow <FaPlaneDeparture className="icon-hero" />
            </h1>
            <p className="sobre-lead">
              O <strong>Planejador de Viagens</strong> é uma aplicação desenvolvida com foco em organização, 
              praticidade e experiência do usuário. O objetivo é oferecer uma forma simples e 
              completa de gerenciar viagens pessoais, permitindo cadastrar destinos, cronogramas 
              e atividades detalhadas sem complicações.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: OBJETIVOS */}
      <section className="sobre-objetivos">
        <div className="container">
          <h2><FaBullseye /> Objetivos do Sistema</h2>
          <div className="objetivos-grid">
            <div className="objetivo-card">
              <FaCheckCircle className="icon-check" />
              <p>Facilitar o planejamento de viagens</p>
            </div>
            <div className="objetivo-card">
              <FaCheckCircle className="icon-check" />
              <p>Evitar conflitos de datas automaticamente</p>
            </div>
            <div className="objetivo-card">
              <FaCheckCircle className="icon-check" />
              <p>Organizar atividades com detalhes completos</p>
            </div>
            <div className="objetivo-card">
              <FaCheckCircle className="icon-check" />
              <p>Oferecer uma interface clara e fácil de usar</p>
            </div>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO: PALETA DE CORES */}
      <section className="sobre-paleta">
        <div className="container">
          <h2><FaPalette /> Identidade Visual</h2>
          <p className="section-desc">
            A paleta de cores "Serenidade Natural" foi escolhida para transmitir tranquilidade e conexão com a natureza.
          </p>
          
          <div className="paleta-grid">
            {/* Cor Primária */}
            <div className="cor-card">
              <div className="cor-swatch" style={{ backgroundColor: 'var(--primary)' }}></div>
              <strong>Primária</strong>
              <span>Teal Profundo</span>
            </div>

            {/* Cor Secundária */}
            <div className="cor-card">
              <div className="cor-swatch" style={{ backgroundColor: 'var(--secondary)' }}></div>
              <strong>Secundária</strong>
              <span>Âmbar / Ocre</span>
            </div>

            {/* Cor de Texto */}
            <div className="cor-card">
              <div className="cor-swatch" style={{ backgroundColor: 'var(--text)' }}></div>
              <strong>Texto</strong>
              <span>Verde Escuro</span>
            </div>

            {/* Cor de Fundo */}
            <div className="cor-card">
              <div className="cor-swatch" style={{ backgroundColor: 'var(--bg)', border: '1px solid #ccc' }}></div>
              <strong>Background</strong>
              <span>Menta Suave</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: TECNOLOGIAS E EQUIPE */}
      <section className="sobre-info">
        <div className="container info-grid">
          
          <div className="info-block">
            <h3><FaLaptopCode /> Tecnologias Utilizadas</h3>
            <ul className="tech-list">
              <li>React.js (Hooks & Context API)</li>
              <li>React Router Dom (SPA)</li>
              <li>CSS Moderno (Flexbox & Grid)</li>
              <li>Integração com API de Câmbio</li>
            </ul>
          </div>

          <div className="info-block">
            <h3><FaUsers /> Equipe de Desenvolvimento</h3>
            <p className="equipe-desc">
              Este projeto foi desenvolvido como parte da disciplina de 
              <strong> Desenvolvimento Web 2</strong>, aplicando práticas modernas de front-end.
            </p>
            <div className="equipe-lista">
              <div className="membro">Nome do Integrante 1 (Dados)</div>
              <div className="membro">Nome do Integrante 2 (Rotas)</div>
              <div className="membro">Você (UI/UX)</div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Sobre;