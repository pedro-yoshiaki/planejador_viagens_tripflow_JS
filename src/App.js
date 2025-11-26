import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Footer from './components/Footer/Footer'
import Rotas from './routes/Rotas';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Rotas/>
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