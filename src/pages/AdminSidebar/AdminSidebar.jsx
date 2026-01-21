import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './AdminSidebar.css';
// 1. Importar el componente que estará en la carpeta components
import FormRegisterClass from '../components/FormRegisterClass/FormRegisterClass';

const AdminSidebar = () => {
  const [panelTitle, setPanelTitle] = useState('Panel de Usuarios');
  // 2. Estado para controlar si el formulario está abierto o cerrado
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      {/* SIDEBAR - Se mantiene igual */}
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

        <button className="logout-btn-f">Cerrar Sesión</button>
      </aside>

      {/* CONTENIDO PRINCIPAL - Se mantiene igual */}
      <main className="main-content">
        <header className="content-header">
          <h1>{panelTitle}</h1>
          <div className="header-buttons">
            <button className="add-btn">+ Nuevo Usuario</button>
            {/* 3. Conectamos el botón para cambiar el estado a true */}
            <button 
              className="add-btn" 
              onClick={() => setIsModalOpen(true)}
            >
              + Registrar clases
            </button>
          </div>
        </header>

        <section className="dashboard-card">
          <Outlet />
        </section>
      </main>

      {/* 4. Insertamos el componente fuera del flujo principal para que no mueva el diseño */}
      <FormRegistrarClase 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default AdminSidebar;