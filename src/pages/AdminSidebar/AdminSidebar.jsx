import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './AdminSidebar.css';

const AdminSidebar= () => {
  return (
    <div className="admin-container">
      <aside className="sidebar">
        <h2 className="sidebar-logo">GYM<span>PRO</span></h2>
        <nav className="sidebar-nav">
          <NavLink to="/admin/usuarios" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Usuarios</NavLink>
          <NavLink to="/admin/clases" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Clases</NavLink>
          <NavLink to="/admin/entrenadores" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Entrenadores</NavLink>
          <button className="nav-item">Reportes</button>
        </nav>
      </aside>

      <main className="main-content">
        <header className="content-header">
          <h1>Panel de Administración</h1>
          <div className="header-buttons">
            <button className="add-btn">+ Nuevo Usuario</button>
            <button className="add-btn">+ Registrar clases</button>
          </div>
        </header>

        <section className="dashboard-card">
          {/* Aquí es donde React Router meterá la tabla correspondiente */}
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default AdminSidebar;