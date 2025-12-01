// Componente padrão de botão para todo SPA

import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

// Props que o componente aceita:
// - children: O texto dentro do botão
// - to: Se existir, vira um Link. Se não, é um button.
// - variant: 'primary' (padrão) ou 'outline'
// - onClick: Função ao clicar
// - ...props: Qualquer outra coisa (tipo type="submit")

const Button = ({ 
  children, 
  to, 
  variant = 'primary', 
  className,
  ...props 
}) => {
  
  // Monta a classe CSS dinamicamente
  // Ex: "btn btn--primary" ou "btn btn--outline"
  const classes = `btn btn--${variant} ${className || ''}`;

  // LÓGICA: Se tiver a prop "to", renderiza um Link do React Router
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  // Se não tiver "to", renderiza um botão HTML normal
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;