import React, { useState, useEffect } from 'react';
import './TrainerPage.css';

const TrainerPage = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    // Aquí conectarás tu servicio de Supabase/Backend
    // Simulamos los datos según tu tabla 'trainers'
    const simulationData = [
      {
        nombre: 'Jorge Carlos', // Vendrá de un JOIN con la tabla 'users'
        specialty: 'Pilates',    // Campo de tu tabla trainers
        is_active: true         // Campo de tu tabla trainers
      },
      {
        nombre: 'Marta Ríos',
        specialty: 'Yoga',
        is_active: false
      }
    ];
    setTrainers(simulationData);
  }, []);

  return (
    <div className="table-container">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Nombre Entrenador</th>
            <th>Especialidad</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map((trainer, index) => (
            <tr key={index}>
              <td>{trainer.nombre}</td>
              <td>{trainer.specialty}</td>
              <td>
                <span className={`status-badge ${trainer.is_active ? 'active' : 'inactive'}`}>
                  {trainer.is_active ? 'Activo' : 'Inactivo'}
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

export default TrainerPage;