# ✈️ TripFlow - Planejador de Viagens

> Uma Single Page Application (SPA) para planejamento e gestão de viagens pessoais.

Bem-vindo ao repositório do **TripFlow**, um projeto desenvolvido como trabalho final da disciplina de **Desenvolvimento Web 2**. O objetivo desta plataforma é oferecer uma interface intuitiva e moderna para que usuários possam organizar roteiros, controlar orçamentos e explorar novos destinos.

---

## 📋 Sobre o Projeto

O TripFlow foi construído utilizando **React.js**, aplicando conceitos fundamentais de desenvolvimento front-end moderno. A aplicação foca na entidade principal "Viagem", oferecendo um ciclo completo de gerenciamento através de uma interface amigável e responsiva.

### Objetivos Alcançados
* **Organização:** Centralização de informações de viagens (datas, destinos e custos).
* **Praticidade:** Criação e edição rápida de roteiros.
* **Tecnologia:** Demonstração de domínio sobre o ecossistema React (Componentização, State, Hooks).

---

## 🚀 Funcionalidades Principais

Este projeto cumpre todos os requisitos propostos na disciplina:

### 1. Single Page Application (SPA) & Rotas
Utilizamos o **React Router Dom** para navegação fluida sem recarregamento.
* `/`: Home (Dashboard e Vitrine)
* `/viagens`: Gestão de Viagens (Listagem principal)
* `/cronograma`: Detalhamento de atividades por viagem
* `/calculadora`: Conversão de moedas em tempo real
* `/sobre`: Informações do projeto e equipe

### 2. Gerenciamento de Estado
* **Props:** Comunicação entre componentes pais e filhos.
* **State Local (useState):** Controle de formulários, modais e filtros.
* **Context API (useAppContext):** Estado global para persistência de dados de viagens e atividades durante a navegação.

### 3. Tabela com CRUD Completo
Na página de Cronograma, é possível realizar todas as operações:
* ✅ **Criar:** Adicionar novas atividades.
* 👀 **Ler:** Visualizar lista organizada.
* ✏️ **Atualizar:** Editar detalhes de atividades existentes.
* 🗑️ **Excluir:** Remover atividades do planejamento.
* *Extra:* Ordenação dinâmica por data/hora.

### 4. Carregamento Dinâmico e APIs
* **Dados Locais:** Simulação de API REST via arquivos JSON (`viagens.json`).
* **API Externa:** Integração com a **AwesomeAPI** na página de Calculadora para cotação de moedas em tempo real.
* **Imagens:** Carregamento dinâmico baseado no destino.

---

## 🛠 Tecnologias Utilizadas

* ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) **React.js (v18+)**
* ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) **React Router Dom**
* ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) **CSS Modules / Flexbox / Grid**
* **Context API**
* **React Icons**

---

## 📂 Estrutura do Projeto

A organização de pastas foi pensada para escalabilidade e manutenção:

```bash
src/
├── components/         # Componentes reutilizáveis
│   ├── common/         # Botões, Inputs genéricos e UI Kits
│   ├── features/       # Lógica de negócio (Cards, Conversor)
│   └── layout/         # Header, Footer
├── context/            # AppContext (Estado Global)
├── data/               # JSONs de dados simulados
├── pages/              # Páginas da aplicação (Home, Viagens...)
│   └── sections/       # Sub-seções específicas das páginas
└── App.js              # Componente Raiz

---
