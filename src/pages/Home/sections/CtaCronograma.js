import React from 'react';
import Button from '../../../components/Button/Button'; // Ajuste o caminho conforme sua pasta
import { FaCalendarCheck } from 'react-icons/fa';
import './CtaSection.css'; // Vamos criar um CSS compartilhado para essas seções CTA

function CtaCronograma() {
  return (
    <section className="cta-section bg-white">
      <div className="container cta-container">
        <div className="cta-content">
          <h2>Organize seu dia a dia <FaCalendarCheck className="icon-title" /></h2>
          <p>
            Pare de se perder em planilhas. No TripFlow, você visualiza seu roteiro 
            detalhado, controla gastos por atividade e não perde nenhum horário.
          </p>
          <Button to="/cronograma" variant="primary">
            Criar meu Roteiro
          </Button>
        </div>
        <div className="cta-image">
          {/* Imagem ilustrativa de planejamento */}
          <img 
            src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop" 
            alt="Planejamento de viagem" 
          />
        </div>
      </div>
    </section>
  );
}

export default CtaCronograma;