import Header from './components/layout/Header/Header'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Footer from './components/layout/Footer/Footer'
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