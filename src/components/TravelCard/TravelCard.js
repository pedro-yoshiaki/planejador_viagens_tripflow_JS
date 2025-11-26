import React from 'react';
import { FaStar, FaPlane, FaRegCalendarAlt } from 'react-icons/fa';
import './TravelCard.css';

function TravelCard({ data, onAgendar }) {
    return (
      <div className="travel-card">
        <div 
          className="card-image" 
          style={{ backgroundImage: `url(${data.imagem})` }}
        >
          {/* Badge de Categoria (Nacional/Internacional) */}
          <span className={`card-category ${data.categoria.toLowerCase()}`}>
            {data.categoria}
          </span>
        </div>
        
        <div className="card-info">
          <div className="card-header">
            <h3>{data.nome}</h3>
            <div className="card-rating">
              <FaStar className="star-icon" />
              <span>{data.nota}</span>
            </div>
          </div>
  
          <p className="card-local">
            <FaPlane className="icon-small" /> {data.local}
          </p>
          
          <div className="prices-container">
            <div className="price-item">
              <span>Diária (aprox.)</span>
              <strong>R$ {data.preco}</strong>
            </div>
            <div className="price-divider"></div>
            <div className="price-item">
              <span>Voo (Ida/Volta)</span>
              <strong>R$ {data.precoIdaVolta}</strong>
            </div>
          </div>
          
          <button className="btn-card" onClick={() => onAgendar(data)}>
            <FaRegCalendarAlt style={{ marginRight: '8px' }} />
            Agendar Datas
          </button>
        </div>
      </div>
    );
  }

export default TravelCard;