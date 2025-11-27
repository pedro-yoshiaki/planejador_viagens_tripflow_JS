import React from 'react';
import Button from '../../../components/Button/Button';
import { FaExchangeAlt } from 'react-icons/fa';
import './CtaSection.css';

function CtaCambio() {
  return (
    <section className="cta-section bg-gray">
      <div className="container cta-container reverse"> {/* Classe 'reverse' para inverter */}
        <div className="cta-content">
          <h2>Conversão em Tempo Real <FaExchangeAlt className="icon-title" /></h2>
          <p>
            Vai viajar para o exterior? Calcule exatamente quanto você vai gastar 
            convertendo para Dólar, Euro ou Libra com a cotação atualizada.
          </p>
          <Button to="/calculadora" variant="outline">
            Simular Conversão
          </Button>
        </div>
        <div className="cta-image">
          <img 
            src="https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=2071&auto=format&fit=crop" 
            alt="Moedas e dinheiro" 
          />
        </div>
      </div>
    </section>
  );
}

export default CtaCambio;