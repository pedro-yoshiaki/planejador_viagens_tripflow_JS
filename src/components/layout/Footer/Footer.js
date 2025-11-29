import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TbGridDots } from "react-icons/tb";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-bg">
      <div className="container footer-grid">
        
        {/* Coluna 1: Marca e Slogan */}
        <div className="footer-brand">
          <div className="footer-logo">
            <TbGridDots className="logo-icon-footer"/>
            <span>TripFlow</span>
          </div>
          <p className="footer-slogan">
            Planeje, organize e viva suas melhores experiências de viagem em um só lugar.
          </p>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div className="footer-links">
          <h4>Navegação</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/viagens">Explorar Destinos</Link></li>
            <li><Link to="/cronograma">Meu Cronograma</Link></li>
            <li><Link to="/calculadora">Câmbio</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Social e Contato */}
        <div className="footer-social">
          <h4>Conecte-se</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          </div>
          <p className="contact-email">contato@tripflow.com</p>
        </div>
      </div>

      {/* Linha final de Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TripFlow. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;