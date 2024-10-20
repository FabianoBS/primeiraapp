import './App.css';
import React from 'react';
import Home from './pages/home';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Contato from './pages/contato/contato';
import Fotos from './pages/fotos/fotos';
import Comentarios from './pages/comentarios/comentarios';
import Detalhes from './pages/detalhes/detalhes';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/fotos' element={<Fotos />} />
        <Route path='/Comentarios' element={<Comentarios />} />
        <Route path='/detalhes/:id' element={<Detalhes />} />
      </Routes>
    </Router>
  );
}

export default App;
