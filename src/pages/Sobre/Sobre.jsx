import React from 'react';
// Importei FaPlaneDeparture (Avião) e FaPalette (Paleta)
import { FaCheckCircle, FaUsers, FaLaptopCode, FaBullseye, FaPlaneDeparture, FaPalette } from 'react-icons/fa';
import './Sobre.css';
import HeroSobre from '../Sobre/sections/HeroSobre'
import Objetivos from '../Sobre/sections/Objetivos'

function Sobre() {
  return (
    <div className="sobre-page">
      
      {/* SEÇÃO 1: HERO */}
      <HeroSobre/>

      {/* SEÇÃO 2: OBJETIVOS */}
      <Objetivos/>

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
              <div className="membro">Arthur Rodrigues</div>
              <div className="membro">Matheus Soares</div>
              <div className="membro">Pedro Yoshiaki</div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Sobre;