   import React, { useState } from "react";
   import { useAppContext } from "../../context/AppContext"; // Contexto global (dados das viagens)
   import "./Cronograma.css"; // Estilos específicos
   import HeroCronograma from "./sections/HeroCronograma"; // Componente visual (Hero)
   import { FaSortAmountUp, FaSortAmountDown } from "react-icons/fa"; // Ícones para ordenação
   
   function Cronograma() {
     /* ==========================================================================
        1. HOOKS E ESTADOS (STATE)
        ========================================================================== */
     
     // Consumindo dados e funções do Contexto Global
     const { viagens, adicionarAtividade, editarAtividade, excluirAtividade } = useAppContext(); 
   
     // Estados de controle de interface (UI)
     const [mostrarFormulario, setMostrarFormulario] = useState(false); // Exibir/Ocultar Modal
     const [atividadeEditando, setAtividadeEditando] = useState(null);  // Armazena a atividade sendo editada (se houver)
     const [ordem, setOrdem] = useState("asc"); // Controle da ordenação (crescente/decrescente)
     
     // Estado do Formulário
     const initialFormState = {
       atividade: "", descricao: "", valor: "", local: "", endereco: "", data: "", horario: "",
     };
     const [form, setForm] = useState(initialFormState);
   
     /* ==========================================================================
        2. MANIPULAÇÃO DO FORMULÁRIO (AUXILIARES)
        ========================================================================== */
   
     // Reseta o formulário para o estado inicial e limpa a seleção de edição
     function limparFormulario() {
       setForm(initialFormState);
       setAtividadeEditando(null);
     }
   
     // Abre o modal em modo de "Nova Atividade"
     function abrirModalNova() {
       limparFormulario();
       setMostrarFormulario(true);
     }
   
     /* ==========================================================================
        3. FUNÇÕES DE AÇÃO (CRUD - CREATE, UPDATE, DELETE)
        ========================================================================== */
   
     // Salva os dados (Decide se cria uma NOVA ou EDITA uma existente)
     function handleSalvar() {
       // Validação básica
       if (!form.atividade || !form.local || !form.data) {
         alert("Preencha os campos obrigatórios"); 
         return;
       }
       
       // Encontra a viagem correspondente ao local selecionado
       const viagemAlvo = viagens.find(v => v.destino === form.local);
       
       if (viagemAlvo) {
           if (atividadeEditando) {
               // Fluxo de EDIÇÃO: Atualiza mantendo o ID original
               editarAtividade(viagemAlvo.id, { ...form, id: atividadeEditando.id });
           } else {
               // Fluxo de CRIAÇÃO: Adiciona nova atividade
               adicionarAtividade(viagemAlvo.id, form);
           }
           // Fecha modal e limpa dados após sucesso
           setMostrarFormulario(false);
           limparFormulario();
       } else {
           alert("Erro: Viagem não encontrada.");
       }
     }
   
     // Prepara o formulário com os dados da atividade selecionada para edição
     function handleEditar(viagemDestino, atividade) {
       setForm({ ...atividade, local: viagemDestino });
       setAtividadeEditando(atividade);
       setMostrarFormulario(true);
     }
   
     // Exclui a atividade após confirmação
     function handleExcluir(idViagem, idAtividade) {
       if (window.confirm("Tem certeza que deseja excluir esta atividade?")) {
           excluirAtividade(idViagem, idAtividade);
       }
     }
   
     /* ==========================================================================
        4. LÓGICA DE ORDENAÇÃO E UTILITÁRIOS
        ========================================================================== */
   
     // Alterna o estado de ordenação entre 'asc' e 'desc'
     function toggleOrdem() {
       setOrdem(prev => prev === "asc" ? "desc" : "asc");
     }
   
     // Ordena a lista de atividades baseada na Data e depois no Horário
     function ordenarAtividades(lista) {
       if (!lista) return [];
       
       const multiplicador = ordem === "asc" ? 1 : -1;
   
       return [...lista].sort((a, b) => {
           const dataA = new Date(a.data);
           const dataB = new Date(b.data);
           
           // 1º Critério: Comparação por Data
           if (dataA < dataB) return -1 * multiplicador;
           if (dataA > dataB) return 1 * multiplicador;
           
           // 2º Critério: Desempate por Horário
           if (a.horario < b.horario) return -1 * multiplicador;
           if (a.horario > b.horario) return 1 * multiplicador;
           
           return 0;
       });
     }
   
     // Formata data do padrão ISO (YYYY-MM-DD) para PT-BR curto (DD/MM)
     const formatarDataSimples = (data) => {
       if(!data) return "";
       const [ano, mes, dia] = data.split("-");
       return `${dia}/${mes}`;
     }
   
     // Calcula o custo total das atividades de uma lista
     function totalPorViagem(lista) {
       return lista.reduce((acc, item) => acc + Number(item.valor), 0);
     }
   
     /* ==========================================================================
        5. RENDERIZAÇÃO (JSX)
        ========================================================================== */
     return (
       <div className="cronograma-wrapper">
         <HeroCronograma/>
         
         <div className="cronograma-container">
           
           {/* --- CABEÇALHO DA PÁGINA --- */}
           <div className="cronograma-header">
             <h1>Tabelas de Cronograma</h1>
             {!mostrarFormulario && (
               <button onClick={abrirModalNova} className="btn btn-primary">
                 + Adicionar Atividade
               </button>
             )}
           </div>
   
           {/* --- MODAL (FORMULÁRIO) --- */}
           {mostrarFormulario && (
             <div className="cronograma-modal-overlay">
               <div className="cronograma-modal">
                 <h3 className="modal-title">
                     {atividadeEditando ? "Editar Atividade" : "Nova Atividade"}
                 </h3>
                 
                 {/* Campos do Formulário */}
                 <div className="form-group">
                   <label>O que vamos fazer?</label>
                   <input type="text" className="form-input" placeholder="Ex: Jantar, Passeio..." 
                     value={form.atividade} onChange={(e) => setForm({...form, atividade: e.target.value})} 
                   />
                 </div>
   
                 <div className="form-group">
                   <label>Viagem (Local)</label>
                   {/* Select desabilitado se estiver editando para não mudar a viagem pai */}
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
   
                 {/* Botões de Ação do Modal */}
                 <div className="modal-actions">
                   <button onClick={() => setMostrarFormulario(false)} className="btn btn-secondary">Cancelar</button>
                   <button onClick={handleSalvar} className="btn btn-success">Salvar</button>
                 </div>
               </div>
             </div>
           )}
   
           {/* --- LISTAGEM DE VIAGENS E ATIVIDADES --- */}
           <div className="cronograma-lista">
             {viagens.length === 0 ? (
               // Feedback de lista vazia
               <p style={{textAlign: 'center', color: '#888', padding: '40px'}}>
                 Nenhuma viagem cadastrada. Vá para a página "Viagens" para começar.
               </p>
             ) : (
               // Mapeamento das Viagens
               viagens.map((v) => {
                 // Ordena atividades desta viagem específica antes de renderizar
                 const atividadesDaViagem = ordenarAtividades(v.atividades || []);
   
                 return (
                   <div key={v.id} className="viagem-section">
                     {/* Cabeçalho da Viagem (Destino e Datas) */}
                     <div className="viagem-title">
                       <span>{v.destino}</span>
                       <small style={{fontSize: '0.9rem', color: '#64748B'}}>
                         {formatarDataSimples(v.dataInicio)} a {formatarDataSimples(v.dataFim)}
                       </small>
                     </div>
   
                     {/* Verifica se há atividades na viagem */}
                     {atividadesDaViagem.length === 0 ? (
                       <p style={{color: '#94A3B8', fontStyle: 'italic', paddingLeft: '20px'}}>
                         Nenhuma atividade planejada ainda.
                       </p>
                     ) : (
                       <div className="tabela-wrapper">
                         <table className="tabela-cronograma">
                           <thead>
                             <tr>
                               {/* Cabeçalho com Botão de Ordenação */}
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
                             {/* Renderização das Linhas da Tabela */}
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
   
                     {/* Exibição do Total Monetário da Viagem */}
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