import React, { useState, useEffect } from 'react';
import './ClassPage.css';

const ClassPage = () => {
  const [clases, setClases] = useState([]);

  useEffect(() => {
    // Aquí conectarás tu servicio de Supabase/Backend más adelante.
    // Datos basados exactamente en tu tabla 'classes'
    const dataSimulada = [
      { name: 'Pilates', description: 'Clase de pilates', is_active: true },
      { name: 'Yoga', description: 'Clase de yoga', is_active: true },
      { name: 'Baile', description: 'Clase de Baile', is_active: true }
    ];
    setClases(dataSimulada);
  }, []);

  return (
    <div className="table-container">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Nombre de Clase</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clases.map((clase, index) => (
            <tr key={index}>
              <td>{clase.name}</td>
              <td>{clase.description}</td>
              <td>
                <span className={`status-badge ${clase.is_active ? 'active' : 'inactive'}`}>
                  {clase.is_active ? 'Activa' : 'Inactiva'}
                </span>
              </td>
              <td>
                <button className="edit-btn">Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassPage;