import React from 'react';
import './ColorCard.css';

function ColorCard({ cor, nome, descricao, borda = false }) {
  return (
    <div className="cor-card">
      <div 
        className="cor-swatch" 
        style={{ 
          backgroundColor: cor,
          // Se a cor for muito clara (como branco), adicionamos borda opcionalmente
          border: borda ? '1px solid #e2e8f0' : 'none' 
        }}
      ></div>
      <strong>{nome}</strong>
      <span>{descricao}</span>
    </div>
  );
}

export default ColorCard;