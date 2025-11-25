import React, { useState, useRef } from "react";
import { useAppContext } from "../context/AppContext";

function Viagens() {
  const { viagens, adicionarViagem, editarViagem, excluirViagem } = useAppContext();

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [editando, setEditando] = useState(null);

  const [form, setForm] = useState({
    destino: "",
    dataInicio: "",
    dataFim: "",
    imagem: "",
  });

  const inputImagemRef = useRef(null);

  function formatarData(dataISO) {
    const [ano, mes, dia] = dataISO.split("-");
    return `${dia}/${mes}/${ano}`;
  }

  function converterImagem(e) {
    const arquivo = e.target.files[0];
    if (!arquivo) {
      setForm({ ...form, imagem: "" });
      return;
    }

    const leitor = new FileReader();
    leitor.onload = (r) => {
      setForm({ ...form, imagem: r.target.result });
    };
    leitor.readAsDataURL(arquivo);
  }

  function abrirFormulario() {
    setMostrarFormulario(true);
    setEditando(null);

    setForm({
      destino: "",
      dataInicio: "",
      dataFim: "",
      imagem: "",
    });

    if (inputImagemRef.current) inputImagemRef.current.value = "";
  }

  function salvar() {
    if (!form.destino || !form.dataInicio || !form.dataFim) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    const inicioN = new Date(form.dataInicio);
    const fimN = new Date(form.dataFim);

    if (fimN < inicioN) {
      alert("A data final não pode ser antes da inicial.");
      return;
    }

    const conflito = viagens.find((v) => {
      if (editando && v.id === editando) return false;

      const inicioV = new Date(v.dataInicio);
      const fimV = new Date(v.dataFim);

      return inicioN <= fimV && fimN >= inicioV;
    });

    if (conflito) {
      alert("Você já tem evento marcado neste dia.");
      return;
    }

    if (editando) {
      editarViagem(editando, form);
    } else {
      adicionarViagem(form);
    }

    setMostrarFormulario(false);
    setEditando(null);
  }

  function editar(v) {
    setEditando(v.id);

    setForm({
      destino: v.destino,
      dataInicio: v.dataInicio,
      dataFim: v.dataFim,
      imagem: v.imagem || "",
    });

    setMostrarFormulario(true);

    if (inputImagemRef.current) inputImagemRef.current.value = "";
  }

  return (
    <div>
      <h1>Viagens</h1>

      {!mostrarFormulario && (
        <button
          onClick={abrirFormulario}
          style={{
            padding: "10px 20px",
            marginBottom: "20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Adicionar Viagem
        </button>
      )}

      {mostrarFormulario && (
        <div
          style={{
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            marginBottom: "25px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)"
          }}
        >
          <h3>{editando ? "Editar Viagem" : "Nova Viagem"}</h3>

          <input
            type="text"
            placeholder="Destino"
            value={form.destino}
            onChange={(e) => setForm({ ...form, destino: e.target.value })}
            style={{ display: "block", marginBottom: "10px", width: "100%" }}
          />

          <label>Imagem da Viagem (opcional):</label>
          <input
            ref={inputImagemRef}
            type="file"
            accept="image/*"
            onChange={converterImagem}
            style={{ display: "block", marginBottom: "10px" }}
          />

          {form.imagem && (
            <img
              src={form.imagem}
              alt="Prévia"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
              }}
            />
          )}

          <label>Data de Início:</label>
          <input
            type="date"
            value={form.dataInicio}
            onChange={(e) => setForm({ ...form, dataInicio: e.target.value })}
            style={{ display: "block", marginBottom: "10px" }}
          />

          <label>Data de Fim:</label>
          <input
            type="date"
            value={form.dataFim}
            onChange={(e) => setForm({ ...form, dataFim: e.target.value })}
            style={{ display: "block", marginBottom: "10px" }}
          />

          <button
            onClick={salvar}
            style={{
              padding: "10px 20px",
              marginRight: "10px",
              backgroundColor: "green",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
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

      <div>
        {viagens.length === 0 ? (
          <p>Nenhuma viagem cadastrada.</p>
        ) : (
          viagens.map((v) => (
            <div
              key={v.id}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                borderRadius: "10px",
                marginBottom: "15px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
              }}
            >
              {v.imagem && (
                <img
                  src={v.imagem}
                  alt="Viagem"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "10px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
                  }}
                />
              )}

              <h3>{v.destino}</h3>
              <p>📅 {formatarData(v.dataInicio)} até {formatarData(v.dataFim)}</p>

              <button
                onClick={() => editar(v)}
                style={{
                  padding: "5px 15px",
                  marginRight: "10px",
                  backgroundColor: "orange",
                  border: "none",
                  color: "#fff",
                  borderRadius: "5px",
                }}
              >
                Editar
              </button>

              <button
                onClick={() => excluirViagem(v.id)}
                style={{
                  padding: "5px 15px",
                  backgroundColor: "red",
                  border: "none",
                  color: "#fff",
                  borderRadius: "5px",
                }}
              >
                Excluir
              </button>

              <div style={{ marginTop: "10px" }}>
                <a
                  href="/cronograma"
                  style={{
                    color: "#007bff",
                    textDecoration: "underline",
                    fontWeight: "bold",
                  }}
                >
                  Ver cronograma da viagem
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Viagens;
