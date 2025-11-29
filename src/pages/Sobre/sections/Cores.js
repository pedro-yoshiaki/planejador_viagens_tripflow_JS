import React from 'react';
import './Cores.css';
import { FaPalette} from 'react-icons/fa';
import ColorCard from '../../../components/features/ColorCard/ColorCard';

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
            <ColorCard 
              cor="var(--primary)" 
              nome="Primária" 
              descricao="Teal Profundo" 
            />

            {/* Cor Secundária */}
            <ColorCard 
              cor="var(--secondary)" 
              nome="Secundária" 
              descricao="Âmbar / Ocre" 
            />

            {/* Cor de Texto */}
            <ColorCard 
              cor="var(--text)" 
              nome="Texto" 
              descricao="Verde Escuro" 
            />

            {/* Cor de Fundo */}
            <ColorCard 
              cor="var(--bg)" 
              nome="Background" 
              descricao="Menta Suave"
              borda={true} // Adiciona borda porque a cor é clara
            />
          </div>
        </div>
      </section>
    );
} export default Cores;