import React, { useState, useRef } from "react";
import { useAppContext } from "../../context/AppContext";
import './Viagens.css'
import HeroViagens from "./sections/HeroViagens";
import CardsViagens from "./sections/CardsViagens";

function Viagens() {
  const { viagens, adicionarViagem, editarViagem, excluirViagem } = useAppContext();

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [editando, setEditando] = useState(null);

  const [form, setForm] = useState({
    destino: "",
    dataInicio: "",
    dataFim: "",
    imagem: "",
    categoria: ""
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
      categoria: ""
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
    const dataAtual = new Date()


    if (fimN < inicioN) {
      alert("A data final não pode ser antes da inicial.");
      return;
    }

     if (inicioN < dataAtual) {
       alert("A data de início da viagem não pode estar no passado.");
       return;
     }
    if (!form.categoria) {  // Certifique-se de que "categoria" é o nome correto no estado.
      alert("Escolha uma categoria válida!");
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
      adicionarViagem({...form,
       id: Math.random().toString(36).substr(2, 9)});
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
      categoria: v.categoria
    });

    setMostrarFormulario(true);

    if (inputImagemRef.current) inputImagemRef.current.value = "";
  }

    // Funções passadas para a Seção Cards
    function handleNovaViagem() {
        setEditando(null);
        setForm({ destino: "", dataInicio: "", dataFim: "", imagem: "", categoria: "Nacional" });
        setMostrarFormulario(true);
      }
    
      function handleEditar(viagem) {
        setEditando(viagem.id);
        setForm(viagem);
        setMostrarFormulario(true);
      }

  return (
    <div className="viagens-page-wrapper">

        {/* SEÇÃO 1: HERO */}
            <HeroViagens />

        {/* SEÇÃO 2: CARDS E FILTROS */}
            <CardsViagens 
                viagens={viagens}
                onNovaViagem={handleNovaViagem}
                onEditar={handleEditar}
                onExcluir={excluirViagem}
            />

      {/* Modal / Formulário */}
      {mostrarFormulario && (
        <div className="modal-overlay">
          <div className="modal-content animate-scale-in">
            <h3 className="modal-title">
              {editando ? "Editar Viagem" : "Nova Viagem"}
            </h3>

            <div className="form-group">
              <input
                type="text"
                className="form-input"
                placeholder="Destino (Ex: Paris)"
                value={form.destino}
                onChange={(e) => setForm({ ...form, destino: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Capa da Viagem:</label>
              <input
                ref={inputImagemRef}
                type="file"
                accept="image/*"
                onChange={converterImagem}
                className="form-input"
              />
              {form.imagem && (
                <img src={form.imagem} alt="Prévia" className="preview-img" />
              )}
            </div>

            <div className="form-group">
              <label>Início:</label>
              <input
                type="date"
                className="form-input"
                value={form.dataInicio}
                onChange={(e) => setForm({ ...form, dataInicio: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Fim:</label>
              <input
                type="date"
                className="form-input"
                value={form.dataFim}
                onChange={(e) => setForm({ ...form, dataFim: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Categoria:</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="categoria"
                    value="Nacional"
                    checked={form.categoria === "Nacional"}
                    onChange={(e) => setForm({ ...form, categoria: e.target.value })}
                  />
                  Nacional
                </label>

                <label className="radio-label">
                  <input
                    type="radio"
                    name="categoria"
                    value="Internacional"
                    checked={form.categoria === "Internacional"}
                    onChange={(e) => setForm({ ...form, categoria: e.target.value })}
                  />
                  Internacional
                </label>
              </div>
            </div>

            <div className="modal-actions">
              <button 
                onClick={() => setMostrarFormulario(false)} 
                className="btn btn-secondary"
              >
                Cancelar
              </button>
              <button onClick={salvar} className="btn btn-success">
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}

      </div>
  );
}

export default Viagens;