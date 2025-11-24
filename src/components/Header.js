import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TbGridDots } from "react-icons/tb"; // Ícone parecido com o da imagem (instale: npm install react-icons)
import './Header.css';

function Header() {
  const location = useLocation();

  // Função auxiliar para verificar se o link é o atual
  const isActive = (path) => {
    return location.pathname === path ? 'menu-item active' : 'menu-item';
  };

  return (
    <header className="header-transparent">
      <div className="container header-content">
        {/* Logo */}
        <Link to="/" className="logo-area">
            <TbGridDots className="logo-icon" />
            <span className="logo-text">TripFlow</span>
        </Link>

        {/* Menu de Navegação */}
        <nav className="nav-menu">
          <Link to="/" className={isActive('/')}>
            Home
          </Link>
          <Link to="/viagens" className={isActive('/viagens')}>
            Explorar
          </Link>
          <Link to="/cronograma" className={isActive('/cronograma')}>
            Cronograma
          </Link>
          <Link to="/calculadora" className={isActive('/calculadora')}>
            Câmbio
          </Link>
          <Link to="/sobre" className={isActive('/sobre')}>
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;