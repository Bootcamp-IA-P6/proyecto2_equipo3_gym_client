// import LoginPage from "./components/LoginPage/LoginPage.jsx";

// function App() {
//   return <LoginPage />;
// }

// export default App;

import React, { useEffect, useState } from 'react';
import api from './services/api'; // Asegúrate de haber creado el archivo api.js en services

function App() {
  const [status, setStatus] = useState("Probando conexión...");
  const [data, setData] = useState(null);

  useEffect(() => {
    // Intentamos conectar con el backend nada más cargar
    api.get('/users') // O usa '/trainers' o cualquier ruta que sepas que existe
      .then(response => {
        console.log("¡ÉXITO! Datos recibidos:", response.data);
        setStatus("✅ CONEXIÓN EXITOSA");
        setData(response.data);
      })
      .catch(error => {
        console.error("ERROR DE CONEXIÓN:", error);
        setStatus("❌ ERROR: No se pudo conectar");
      });
  }, []);

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Prueba de Conexión Backend-Frontend</h1>
      <h2 style={{ color: status.includes('EXITOSA') ? 'green' : 'red' }}>
        {status}
      </h2>
      
      {data && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>Datos recibidos del servidor:</h3>
          <pre style={{ textAlign: 'left' }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;