import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <main style={{ 
          height: '100vh', 
          backgroundImage: 'url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
      }}>
        <h1 style={{ color: 'white', fontSize: '3rem', textShadow: '2px 2px 4px #000' }}>
          Sua Próxima Aventura
        </h1>
        
        {/* Aqui virão as <Routes> depois, quando criarmos as páginas Home, Sobre, etc */}
      </main>
    </div>
    <Footer/>
    </Router>
  );
}

export default App;

/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */