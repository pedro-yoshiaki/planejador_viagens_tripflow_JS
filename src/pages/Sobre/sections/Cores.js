import React from 'react';
import './Cores.css';
import { FaPalette} from 'react-icons/fa';

function Cores (){
    return(
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
    );
} export default Cores;