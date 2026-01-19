import React from 'react';
import './AdminSidebar.css';

const AdminSidebar = () => {
  return (
    <div className="admin-container">
      {/* BARRA LATERAL */}
      <aside className="sidebar">
        <h2 className="sidebar-logo">GYM<span>PRO</span></h2>
        <nav className="sidebar-nav">
          <button className="nav-item active">Usuarios</button>
          <button className="nav-item">Clases</button>
          <button className="nav-item">Membresías</button>
          <button className="nav-item">Reportes</button>
        </nav>
        <button className="logout-btn">Cerrar Sesión</button>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="main-content">
        <header className="content-header">
          <h1>Panel de Usuarios</h1>
          <button className="add-btn">+ Nuevo Usuario</button>
        </header>

        <section className="dashboard-card">
          {/* Aquí es donde tu compañera luego conectará la tabla real */}
          <table className="admin-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Estado</th>
                <th>Membresía</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Juan Pérez</td>
                <td><span className="status active">Activo</span></td>
                <td>Premium</td>
                <td><button className="edit-btn">Editar</button></td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default AdminSidebar;