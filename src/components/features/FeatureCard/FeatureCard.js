// Componente usado na section Features de Home, mostrar as funcionalidades do SPA

import React from 'react';
import './FeatureCard.css';

function FeatureCard({ icon, title, text }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default FeatureCard;