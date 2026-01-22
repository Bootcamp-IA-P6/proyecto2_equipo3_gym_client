import React, { useState, useEffect } from 'react';
import './UserPage.css';

const UserPage = () => {
  // Estado para almacenar los usuarios que traigas de tu servicio
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Aquí es donde harás tu fetch: const data = await getUsersWithClasses();
    // Simulamos los datos finales combinados (JOIN) de tus tablas
    const dataSimulada = [
      {
        id: 1,
        full_name: 'Juan Pérez',
        is_active: true,
        membership: 'Premium',
        clase_asignada: 'Pilates', // Esto vendrá del class_id
        entrenador_asignado: 'Jorge Carlos' // Esto vendrá del trainer_id
      }
    ];
    setUsuarios(dataSimulada);
  }, []);

  return (
    <div className="user-page-container">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Membresía</th>
            <th>Clase</th>
            <th>Entrenador</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((user) => (
            <tr key={user.id}>
              <td>{user.full_name}</td>
              <td>
                <span className={`status-badge ${user.is_active ? 'active' : 'inactive'}`}>
                  {user.is_active ? 'Activo' : 'Inactivo'}
                </span>
              </td>
              <td>{user.membership}</td>
              <td>{user.clase_asignada}</td>
              <td>{user.entrenador_asignado}</td>
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

export default UserPage;