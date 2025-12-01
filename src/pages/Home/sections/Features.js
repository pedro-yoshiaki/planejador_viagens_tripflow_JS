import React from 'react';
import Button from '../../../components/common/Button/Button';
import FeatureCard from "../../../components/features/FeatureCard/FeatureCard";
import { FaSuitcase, FaCalendarAlt, FaLock } from 'react-icons/fa';
import './Features.css';

function Feature() {
    return(
        <section className="features-section">
            <div className="features-container">
            <div className="features-header">
                <h2>O que o TripFlow oferece?</h2>
                <p>Tudo o que você precisa para uma viagem tranquila.</p>
            </div>

            <div className="features-grid">
                {/* Uso do componente FeatureCard */}
                
                <FeatureCard 
                icon={<FaSuitcase />}
                title="Planejamento de Viagens"
                text="Cadastre suas viagens com datas, fotos e informações essenciais. O sistema impede conflitos de calendário automaticamente."
                />

                <FeatureCard 
                icon={<FaCalendarAlt />}
                title="Cronograma por Dia"
                text="Adicione atividades com horário, local, valor e endereço. Tudo organizado automaticamente por data."
                />

                <FeatureCard 
                icon={<FaLock />}
                title="Sem Conflitos"
                text="O sistema detecta automaticamente se uma atividade ou viagem entra em conflito com outras datas."
                />
            </div>

            <div className="features-action">
                <Button to="/sobre" variant="outline">
                Saiba mais sobre nós
                </Button>
            </div>
            </div>
        </section>
    );
}

export default Feature;