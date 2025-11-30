import React from 'react';
import Button from '../../../components/common/Button/Button';
import './Hero.css';

function Hero() {
    return (
        
      <section className="hero-section">
        <div className="hero-overlay"> {/* Camada escura para melhorar leitura */}
            <div className="hero-content">
            <h1 className="hero-title">
                Bem-vindo ao Planejador de Viagens
            </h1>
            
            <p className="hero-text">
                Organize todas as suas viagens em um só lugar. Planeje datas, atividades,
                locais e acompanhe seus roteiros com facilidade.
            </p>

            <Button to="/viagens" variant="primary">
                Começar
            </Button>
            </div>
        </div>
        </section>
    );
}

export default Hero;