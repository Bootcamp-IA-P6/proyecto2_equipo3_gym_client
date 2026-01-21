import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './AdminSidebar.css';

const AdminSidebar = () => {
  const [panelTitle, setPanelTitle] = useState('Panel de Usuarios');
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path.includes('usuarios')) setPanelTitle('Panel de Usuarios');
    else if (path.includes('clases')) setPanelTitle('Panel de Clases');
    else if (path.includes('membresias')) setPanelTitle('Panel de Membresías');
    else if (path.includes('reportes')) setPanelTitle('Panel de Reportes');
  }, [location]);

  return (
    <div className="admin-container">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2 className="sidebar-logo">GYM<span>PRO</span></h2>
        
        <nav className="sidebar-nav">
          <NavLink 
            to="/admin/usuarios" 
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
          >
            Usuarios
          </NavLink>
          <NavLink 
            to="/admin/clases" 
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
          >
            Clases
          </NavLink>
          <NavLink 
            to="/admin/membresias" 
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
          >
            Membresías
          </NavLink>
          <NavLink 
            to="/admin/reportes" 
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
          >
            Reportes
          </NavLink>
        </nav>

        {/* Botón de cerrar sesión al fondo */}
        <button className="logout-btn-f">Cerrar Sesión</button>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="main-content">
        <header className="content-header">
          <h1>{panelTitle}</h1>
          <div className="header-buttons">
            <button className="add-btn">+ Nuevo Usuario</button>
            <button className="add-btn">+ Registrar clases</button>
          </div>
        </header>

        <section className="dashboard-card">
          {/* Aquí aparecerán las tablas de las otras Pages */}
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default AdminSidebar;