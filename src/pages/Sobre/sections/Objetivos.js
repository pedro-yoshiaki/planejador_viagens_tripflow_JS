import React from 'react';
import './Objetivos.css';
import { FaCheckCircle, FaBullseye} from 'react-icons/fa';

function Objetivos (){
    return (
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
    )    
} 

export default Objetivos