import React from 'react';
import './Objetivos.css';
import { FaCheckCircle, FaBullseye, FaMapMarkedAlt, FaCalendarCheck, FaClipboardList, FaMousePointer} from 'react-icons/fa';
import ObjetivoCard from '../../../components/features/ObjetivoCard/ObjetivoCard';

function Objetivos (){
    return (
        <section className="sobre-objetivos">
                <div className="container">
                  <h2><FaBullseye /> Objetivos do Sistema</h2>
                  <div className="objetivos-grid">

                    <ObjetivoCard 
                        icon={<FaMapMarkedAlt />} 
                        texto="Facilitar o planejamento de viagens" 
                    />

                    <ObjetivoCard 
                        icon={<FaCalendarCheck />} 
                        texto="Evitar conflitos de datas automaticamente" 
                    />
                            
                    <ObjetivoCard 
                        icon={<FaClipboardList />} 
                        texto="Organizar atividades com detalhes completos" 
                    />
                            
                    <ObjetivoCard 
                        icon={<FaMousePointer />} 
                        texto="Oferecer uma interface clara e fácil de usar" 
                    />
                  </div>
                </div>
              </section>
    )    
} 

export default Objetivos