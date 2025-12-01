// Componente usado em "Sobre" para mostrar os objetivos do SPA

import React from 'react';
import './ObjetivoCard.css';

function ObjetivoCard({ icon, texto }) {
  return (
    <div className="objetivo-card">
      <div className="icon-container">
        {icon}
      </div>
      <p>{texto}</p>
    </div>
  );
}

export default ObjetivoCard;