import React from 'react';
import './EquipeTech.css';
import {FaUsers, FaLaptopCode} from 'react-icons/fa';

function EquipeTech (){
    return(
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
    );
} export default EquipeTech;