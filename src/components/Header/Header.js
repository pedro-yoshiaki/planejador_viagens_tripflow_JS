import React, { useState } from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import { TbGridDots } from "react-icons/tb";
import { FaBars, FaTimes } from "react-icons/fa";
import './Header.css';

function Header() {
  // Armazenar a localização do usuário URL atual
  const location = useLocation();
  
  // State para controlar se o menu mobile está aberto ou fechado 
  // Variável click começando como false (menu fechado). setClick é a ferramenta que usamos para mudar esse valor.
  const [click, setClick] = useState(false);

  // Função para inverter o estado (abrir/fechar)
  const handleClick = () => setClick(!click);

  // Função para fechar o menu sempre que um link for clicado
  const closeMobileMenu = () => setClick(false);

  // Função que verifica se o caminho atual é igual ao caminho do botão do menu
  // Se for o className é menu-item-active, se não é apenas menu-item 
  const isActive = (path) => {
    return location.pathname === path ? 'menu-item active' : 'menu-item';
  };

  return (
    <header className="header-transparent">
      <div className="container header-content">
        
        {/* Logo */}
        <Link to="/" className="logo-area" onClick={closeMobileMenu}>
            <TbGridDots className="logo-icon" />
            <span className="logo-text">TripFlow</span>
        </Link>

        {/* Ícone do Menu Hamburguer (Só aparece no Mobile via CSS) */}
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>

        {/* Menu de Navegação */}
        {/* Adicionamos a classe 'active' se o state click for true */}
        <nav className={click ? 'nav-menu active' : 'nav-menu'}>
          <Link to="/" className={isActive('/')} onClick={closeMobileMenu}>
            Home
          </Link>
          <Link to="/viagens" className={isActive('/viagens')} onClick={closeMobileMenu}>
            Viagens
          </Link>
          <Link to="/cronograma" className={isActive('/cronograma')} onClick={closeMobileMenu}>
            Cronograma
          </Link>
          <Link to="/calculadora" className={isActive('/calculadora')} onClick={closeMobileMenu}>
            Câmbio
          </Link>
          <Link to="/sobre" className={isActive('/sobre')} onClick={closeMobileMenu}>
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;