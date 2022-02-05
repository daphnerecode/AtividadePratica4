import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from '../src/Pages/Home/Home';
import Destinos from '../src/Pages/Destinos/Destinos'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Promocoes from './Pages/Promocoes/Promocoes';
import Cadastroclientes from './Pages/Cadastroclientes/Cadastroclientes';
import Reservas from './Pages/Reservas/Reservas';
import Contato from './Pages/Contato/Contato';



ReactDOM.render(
  <React.StrictMode>
    <Router> 
      <Routes> 
        <Route path="/" exact element={<Home/>}> </Route>
        <Route path="/Destinos" element={<Destinos/>}> </Route>
        <Route path="/Promocoes" element={<Promocoes/>}> </Route>
        <Route path="/Cadastroclientes" element={<Cadastroclientes/>}> </Route>
        <Route path="/Reservas" element={<Reservas/>}> </Route>
        <Route path="/Contato" element={<Contato/>}> </Route>
      </Routes>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);
