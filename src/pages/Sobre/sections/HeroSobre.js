import React from 'react';
import './HeroSobre.css';
import { FaPlaneDeparture } from 'react-icons/fa';

function HeroSobre() {
    return(
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

    );
}

export default HeroSobre;