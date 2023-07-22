import './App.scss';
import Obs from './componentes/Obs/Obs';
import Formulario from './Formulario/componentes/Form/Formulario';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {

  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            {Obs}
            <Link to="/"></Link>
          </li>
          <li>
            {Formulario}
            <Link to="/formulario"></Link>
          </li>
        </ul>
      </nav>

    
      <Routes>
        <Route path="/" element={<Obs />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
    </div>
  </Router>
);
}


export default App;
