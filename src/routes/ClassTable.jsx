import React from 'react';

const ClassTable = () => {
  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {/* Aquí conectarás el servicio de clases de tu backend */}
        <tr>
          <td>1</td>
          <td>Pilates</td>
          <td>Clase de pilates</td>
          <td><span className="status active">TRUE</span></td>
          <td><button className="edit-btn">Editar</button></td>
        </tr>
      </tbody>
    </table>
  );
};

export default ClassTable;