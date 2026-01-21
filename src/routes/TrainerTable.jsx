import React from 'react';

const TrainerTable = () => {
  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>ID Entrenador</th>
          <th>ID Usuario</th>
          <th>Especialidad</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {/* Aquí conectarás el servicio de entrenadores de tu backend */}
        <tr>
          <td>2</td>
          <td>2</td>
          <td>Pilates</td>
          <td><span className="status active">TRUE</span></td>
          <td><button className="edit-btn">Editar</button></td>
        </tr>
        <tr>
          <td>6</td>
          <td>2</td>
          <td>Yoga</td>
          <td><span className="status inactive">FALSE</span></td>
          <td><button className="edit-btn">Editar</button></td>
        </tr>
      </tbody>
    </table>
  );
};

export default TrainerTable;