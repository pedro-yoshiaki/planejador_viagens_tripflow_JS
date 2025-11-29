// Importação das bibliotecas
import React, { useState } from "react";
import { useAppContext } from "../context/AppContext"; //recupera dados e funcionalidade da aplicação que estão no contexto

function Cronograma() {

  // compartilhamento da viagem
  const { viagens } = useAppContext();

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [atividades, setAtividades] = useState([]);

  const [form, setForm] = useState({
    atividade: "",
    descricao: "",
    valor: "",
    local: "",
    endereco: "",
    data: "",
    horario: "",
  });

  function limparFormulario() {
    setForm({
      atividade: "",
      descricao: "",
      valor: "",
      local: "",
      endereco: "",
      data: "",
      horario: "",
    });
  }

  // verificação se dados estão preenchido
  function adicionarAtividade() {
    // validações
    if (
      !form.atividade ||
      !form.descricao ||
      !form.valor ||
      !form.local ||
      !form.endereco ||
      !form.data ||
      !form.horario
    ) {
      alert("Preencha todos os campos.");
      return;
    }

    // validar que o local existe nas viagens
    const viagemExiste = viagens.some((v) => v.destino === form.local);

    if (!viagemExiste) {
      alert("Selecione um local válido que exista nas viagens.");
      return;
    }

  //---- Matheus   -----//

   const validarHora = (hora) => /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(hora);

   if (!validarHora(form.horario)) {
     alert("Informe um horário válido (formato HH:mm).");
     return;
   }

   const conflito = atividades.find(
     (a) =>
       a.data === form.data &&
       a.horario === form.horario // Agora leva em conta o horário também
   );

   if (conflito) {
     alert("Já existe uma atividade marcada neste dia e horário.");
     return;
   }

    // validar se a data está dentro do período da viagem
    const viagem = viagens.find((v) => v.destino === form.local);
    const dataAtividade = new Date(form.data);
    const dataInicio = new Date(viagem.dataInicio);
    const dataFim = new Date(viagem.dataFim);

    if (dataAtividade < dataInicio || dataAtividade > dataFim) {
      alert("A data da atividade deve estar dentro do período da viagem.");
      return;
    }

    // valida se o valor da atividade é positiva
   if (isNaN(form.valor) || Number(form.valor) <= 0) {
     alert("Informe um valor válido e positivo.");
     return;
   }
    //---- Fim    -----//

    const novaLista = [...atividades, form].sort(
      (a, b) => new Date(a.data) - new Date(b.data)
    );
    
    
    setAtividades(novaLista);

    limparFormulario();
    setMostrarFormulario(false);
  }

  // soma dos valores por viagem
  function totalPorViagem(destino) {
    const atividadesLocal = atividades.filter((a) => a.local === destino);
    return atividadesLocal.reduce((acc, item) => acc + Number(item.valor), 0);
  }

  return (
    <div>
      <h1>Cronograma da Viagem</h1>

      {/* BOTÃO ADICIONAR ATIVIDADE */}
      {!mostrarFormulario && (
        <button
          onClick={() => setMostrarFormulario(true)}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            marginBottom: "20px",
            cursor: "pointer",
          }}
        >
          Adicionar atividade
        </button>
      )}

      {/* FORMULÁRIO */}
      {mostrarFormulario && (
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "20px",
            marginBottom: "30px",
          }}
        >
          <h3>Nova Atividade</h3>

          <input
            type="text"
            placeholder="Atividade"
            value={form.atividade}
            onChange={(e) => setForm({ ...form, atividade: e.target.value })}
            style={{ display: "block", marginBottom: "10px", width: "100%" }}
          />

          <textarea
            placeholder="Descrição"
            value={form.descricao}
            onChange={(e) => setForm({ ...form, descricao: e.target.value })}
            style={{
              display: "block",
              marginBottom: "10px",
              width: "100%",
              height: "60px",
            }}
          />

          <input
            type="number"
            placeholder="Valor (R$)"
            value={form.valor}
            onChange={(e) => setForm({ ...form, valor: e.target.value })}
            style={{ display: "block", marginBottom: "10px", width: "100%" }}
          />

          <select
            value={form.local}
            onChange={(e) => setForm({ ...form, local: e.target.value })}
            style={{ display: "block", marginBottom: "10px", width: "100%" }}
          >
            <option value="">Selecione o local (viagem)</option>
            {viagens.map((v) => (
              <option key={v.id} value={v.destino}>
                {v.destino}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Endereço"
            value={form.endereco}
            onChange={(e) => setForm({ ...form, endereco: e.target.value })}
            style={{ display: "block", marginBottom: "10px", width: "100%" }}
          />

          <label>Data:</label>
          <input
            type="date"
            value={form.data}
            onChange={(e) => setForm({ ...form, data: e.target.value })}
            style={{ display: "block", marginBottom: "10px" }}
          />

          <label>Horário:</label>
          <input
            type="text"
            placeholder="Começo (ex: 14:14)"
            value={form.horario}
            onChange={(e) => setForm({ ...form, horario: e.target.value })}
            style={{ display: "block", marginBottom: "10px", width: "100%" }}
          />
          

          <button
            onClick={adicionarAtividade}
            style={{
              padding: "10px 20px",
              backgroundColor: "green",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              marginRight: "10px",
            }}
          >
            Salvar
          </button>

          <button
            onClick={() => setMostrarFormulario(false)}
            style={{
              padding: "10px 20px",
              backgroundColor: "gray",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Cancelar
          </button>
        </div>
      )}

      {/* LISTA POR VIAGEM */}
      <h2>Atividades por viagem</h2>

      {viagens.map((v) => {
        const atividadesDaViagem = atividades.filter(
          (a) => a.local === v.destino
        );

        return (
          <div
            key={v.id}
            style={{
              background: "#f8f8f8",
              padding: "15px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            <h3>{v.destino}</h3>

            {atividadesDaViagem.length === 0 ? (
              <p>Nenhuma atividade cadastrada.</p>
            ) : (
              <ul>
                {atividadesDaViagem.map((a, index) => (
                  <li key={index} style={{ marginBottom: "8px" }}>
                    <strong>{a.atividade}</strong> — {a.data.split("-").reverse().join("/")}
                    <br />
                    {a.descricao}
                    <br />
                    Valor: R$ {a.valor}
                    <br />
                    Local: {a.local}
                    <br />
                    Endereço: {a.endereco}
                    <br />
                    Horário: {a.horario}h
                  </li>
                ))}
              </ul>
            )}

            {/* TOTAL */}
            <p>
              <strong>Total:</strong> R$ {totalPorViagem(v.destino)}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Cronograma;