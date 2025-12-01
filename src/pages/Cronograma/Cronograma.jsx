import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import "./Cronograma.css";
import HeroCronograma from "./sections/HeroCronograma";
import { FaSortAmountUp, FaSortAmountDown } from "react-icons/fa";

function Cronograma() {
  const { viagens, adicionarAtividade, editarAtividade, excluirAtividade } = useAppContext(); 

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [atividadeEditando, setAtividadeEditando] = useState(null);
  
  const [ordem, setOrdem] = useState("asc");
  
  const initialFormState = {
    atividade: "", descricao: "", valor: "", local: "", endereco: "", data: "", horario: "",
  };
  const [form, setForm] = useState(initialFormState);

  function limparFormulario() {
    setForm(initialFormState);
    setAtividadeEditando(null);
  }

  function abrirModalNova() {
    limparFormulario();
    setMostrarFormulario(true);
  }

  function handleSalvar() {
    if (!form.atividade || !form.local || !form.data) {
      alert("Preencha os campos obrigatórios"); 
      return;
    }
    
    const viagemAlvo = viagens.find(v => v.destino === form.local);
    if (viagemAlvo) {
        if (atividadeEditando) {
            editarAtividade(viagemAlvo.id, { ...form, id: atividadeEditando.id });
        } else {
            adicionarAtividade(viagemAlvo.id, form);
        }
        setMostrarFormulario(false);
        limparFormulario();
    } else {
        alert("Erro: Viagem não encontrada.");
    }
  }

  function handleEditar(viagemDestino, atividade) {
    setForm({ ...atividade, local: viagemDestino });
    setAtividadeEditando(atividade);
    setMostrarFormulario(true);
  }

  function handleExcluir(idViagem, idAtividade) {
    if (window.confirm("Tem certeza que deseja excluir esta atividade?")) {
        excluirAtividade(idViagem, idAtividade);
    }
  }

  // Função para alternar a ordem ao clicar no botão
  function toggleOrdem() {
    setOrdem(prev => prev === "asc" ? "desc" : "asc");
  }

  function ordenarAtividades(lista) {
    if (!lista) return [];
    
    // Define o multiplicador: 1 para normal, -1 para invertido
    const multiplicador = ordem === "asc" ? 1 : -1;

    return [...lista].sort((a, b) => {
        const dataA = new Date(a.data);
        const dataB = new Date(b.data);
        
        // Compara Datas
        if (dataA < dataB) return -1 * multiplicador;
        if (dataA > dataB) return 1 * multiplicador;
        
        // Se datas iguais, compara Horário
        if (a.horario < b.horario) return -1 * multiplicador;
        if (a.horario > b.horario) return 1 * multiplicador;
        
        return 0;
    });
  }

  const formatarDataSimples = (data) => {
    if(!data) return "";
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}`;
  }

  function totalPorViagem(lista) {
    return lista.reduce((acc, item) => acc + Number(item.valor), 0);
  }

  return (
    <div className="cronograma-wrapper">
      <HeroCronograma/>
    <div className="cronograma-container">
      
      <div className="cronograma-header">
        <h1>Tabelas de Cronograma</h1>
        {!mostrarFormulario && (
          <button onClick={abrirModalNova} className="btn btn-primary">
            + Adicionar Atividade
          </button>
        )}
      </div>

      {mostrarFormulario && (
        <div className="cronograma-modal-overlay">
          <div className="cronograma-modal">
            <h3 className="modal-title">
                {atividadeEditando ? "Editar Atividade" : "Nova Atividade"}
            </h3>
            
            <div className="form-group">
              <label>O que vamos fazer?</label>
              <input type="text" className="form-input" placeholder="Ex: Jantar, Passeio..." 
                value={form.atividade} onChange={(e) => setForm({...form, atividade: e.target.value})} 
              />
            </div>

            <div className="form-group">
              <label>Viagem (Local)</label>
              <select className="form-input" value={form.local} onChange={(e) => setForm({...form, local: e.target.value})} disabled={!!atividadeEditando}>
                <option value="">Selecione a viagem...</option>
                {viagens.map((v) => (
                  <option key={v.id} value={v.destino}>{v.destino}</option>
                ))}
              </select>
            </div>

            <div className="form-row">
               <div className="form-group" style={{flex: 1}}>
                 <label>Data</label>
                 <input type="date" className="form-input" value={form.data} onChange={(e) => setForm({...form, data: e.target.value})} />
               </div>
               <div className="form-group" style={{flex: 1}}>
                 <label>Hora</label>
                 <input type="time" className="form-input" value={form.horario} onChange={(e) => setForm({...form, horario: e.target.value})} />
               </div>
            </div>

            <div className="form-group">
              <label>Descrição</label>
              <textarea className="form-input" rows="3" value={form.descricao} onChange={(e) => setForm({...form, descricao: e.target.value})} />
            </div>

            <div className="form-row">
               <div className="form-group" style={{flex: 2}}>
                  <label>Endereço</label>
                  <input type="text" className="form-input" value={form.endereco} onChange={(e) => setForm({...form, endereco: e.target.value})} />
               </div>
               <div className="form-group" style={{flex: 1}}>
                  <label>Valor (R$)</label>
                  <input type="number" className="form-input" value={form.valor} onChange={(e) => setForm({...form, valor: e.target.value})} />
               </div>
            </div>

            <div className="modal-actions">
              <button onClick={() => setMostrarFormulario(false)} className="btn btn-secondary">Cancelar</button>
              <button onClick={handleSalvar} className="btn btn-success">Salvar</button>
            </div>
          </div>
        </div>
      )}

      <div className="cronograma-lista">
        {viagens.length === 0 ? (
          <p style={{textAlign: 'center', color: '#888', padding: '40px'}}>
            Nenhuma viagem cadastrada. Vá para a página "Viagens" para começar.
          </p>
        ) : (
          viagens.map((v) => {
            const atividadesDaViagem = ordenarAtividades(v.atividades || []);

            return (
              <div key={v.id} className="viagem-section">
                <div className="viagem-title">
                  <span>{v.destino}</span>
                  <small style={{fontSize: '0.9rem', color: '#64748B'}}>
                    {formatarDataSimples(v.dataInicio)} a {formatarDataSimples(v.dataFim)}
                  </small>
                </div>

                {atividadesDaViagem.length === 0 ? (
                  <p style={{color: '#94A3B8', fontStyle: 'italic', paddingLeft: '20px'}}>
                    Nenhuma atividade planejada ainda.
                  </p>
                ) : (
                  <div className="tabela-wrapper">
                    <table className="tabela-cronograma">
                      <thead>
                        <tr>
                          {/* NOVO: Botão de Ordenação no cabeçalho */}
                          <th className="col-horario">
                          <button className="btn-sort" onClick={toggleOrdem} title="Ordenar por Data">
                            Data/Hora
                            {ordem === 'asc' ? 
                              <FaSortAmountUp style={{ marginLeft: '5px' }} /> : 
                              <FaSortAmountDown style={{ marginLeft: '5px' }} />
                            }
                          </button>
                          </th>
                          <th className="col-atividade">Atividade</th>
                          <th className="col-descricao">Descrição</th>
                          <th className="col-local">Endereço</th>
                          <th className="col-valor">Valor</th>
                          <th className="col-acoes">Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {atividadesDaViagem.map((a, index) => (
                          <tr key={a.id || index}>
                            <td className="col-horario">
                              {formatarDataSimples(a.data)} <br/> 
                              <span style={{fontWeight: 'normal', fontSize: '0.85rem'}}>{a.horario}</span>
                            </td>
                            <td className="col-atividade">{a.atividade}</td>
                            <td className="col-descricao">{a.descricao}</td>
                            <td className="col-local">{a.endereco}</td>
                            <td className="col-valor">R$ {a.valor}</td>
                            <td className="col-acoes">
                                <div style={{display: 'flex', gap: '5px', justifyContent: 'center'}}>
                                  <button className="btn-icon-table edit" onClick={() => handleEditar(v.destino, a)}>✏️</button>
                                  <button className="btn-icon-table delete" onClick={() => handleExcluir(v.id, a.id)}>🗑️</button>
                                </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                <div className="total-box">
                  Total da Viagem: 
                  <span className="total-valor">R$ {totalPorViagem(atividadesDaViagem).toFixed(2)}</span>
                </div>
              </div>
            );
          })
        )}
      </div>

    </div>
    </div>
  );
}

export default Cronograma;