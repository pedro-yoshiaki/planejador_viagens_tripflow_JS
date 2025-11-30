import React, { useState } from 'react';
import { FaCalendarAlt, FaPlus } from 'react-icons/fa';
import './CardsViagens.css';

function CardsViagens({ viagens, onEditar, onExcluir, onNovaViagem }) {
  const [filtro, setFiltro] = useState("Todos");

  // Função auxiliar de data
  function formatarData(dataISO) {
    if (!dataISO) return "--/--/----";
    const [ano, mes, dia] = dataISO.split("-");
    return `${dia}/${mes}/${ano}`;
  }

  // Lógica de Filtro
  const viagensFiltradas = viagens.filter((viagem) => {
    if (filtro === "Todos") return true;
    return viagem.categoria === filtro;
  });

  return (
    <section className="viagens-content container">
      
      {/* Barra de Controles */}
      <div className="viagens-controls">
        <div className="filtros">
          {['Todos', 'Nacional', 'Internacional'].map((cat) => (
            <button 
              key={cat}
              className={`btn-filtro ${filtro === cat ? 'ativo' : ''}`}
              onClick={() => setFiltro(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <button onClick={onNovaViagem} className="btn btn-primary">
          <FaPlus style={{ marginRight: '8px' }} /> Nova Viagem
        </button>
      </div>

      {/* Grid de Cards */}
      <div className="viagens-grid">
        {viagensFiltradas.length === 0 ? (
          <p className="empty-state">
            Nenhuma viagem encontrada em "{filtro}".
          </p>
        ) : (
          viagensFiltradas.map((v) => (
            <div key={v.id} className="viagem-card">
              
              <div className="card-header-img">
                <img
                  src={v.imagem || "https://via.placeholder.com/400x200?text=Sem+Imagem"}
                  alt={v.destino}
                  className="card-img"
                />
                <span className={`card-badge ${v.categoria?.toLowerCase()}`}>
                  {v.categoria || 'Nacional'}
                </span>
              </div>

              <div className="card-body">
                <h3>{v.destino}</h3>
                <div className="card-datas">
                  <FaCalendarAlt />
                  <span>{formatarData(v.dataInicio)} até {formatarData(v.dataFim)}</span>
                </div>

                <div className="card-actions">
                  <button onClick={() => onEditar(v)} className="btn btn-warning">Editar</button>
                  <button onClick={() => onExcluir(v.id)} className="btn btn-danger">Excluir</button>
                </div>
                
                <a href="/cronograma" className="link-cronograma">
                  Ver Cronograma Completo →
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default CardsViagens;