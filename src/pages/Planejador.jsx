import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

function Cronograma() {
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

    // validar que não existe conflito de datas para atividades
    const conflito = atividades.find((a) => a.data === form.data);

    if (conflito) {
      alert("Você já tem evento marcado neste dia.");
      return;
    }

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
            type="number"
            placeholder="Horário (ex: 14 para 14h)"
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
