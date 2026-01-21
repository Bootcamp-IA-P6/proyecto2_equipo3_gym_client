import React from 'react';

const ClassTable = () => (
  <table className="admin-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Estado (Active)</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
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

export default ClassTable;