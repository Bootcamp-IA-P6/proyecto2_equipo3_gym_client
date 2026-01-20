
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/AppRouter'; // Importamos el archivo de rutas que creamos
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        {/* Aquí cargamos toda la configuración de rutas */}
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;