import React from 'react';

const UserTable = () => {
  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Estado</th>
          <th>Entrenador</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {/* Aquí es donde mapearás el servicio del backend más adelante */}
        <tr>
          <td>Juan Pérez</td>
          <td><span className="status active">Activo</span></td>
          <td>Jorge Carlos</td>
          <td><button className="edit-btn">Editar</button></td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserTable;