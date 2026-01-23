import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import './AdminSidebar.css';

import Modal from '../../components/Modal/Modal';
import FormRegisterUsuario from '../../components/FormRegisterUsuario/FormRegisterUsuario';
import FormRegisterClass from '../../components/FormRegisterClass/FormRegisterClass';
import {
  LuUsers,           /* Cambiado de LuUsers2 a LuUsers */
  LuCalendarDays,
  LuDumbbell,
  LuLogOut,
  LuUserPlus,
  LuPlus             /* Usaremos LuPlus en lugar de LuPlusCircle */
} from "react-icons/lu";

const AdminSidebar = () => {
  const [panelTitle, setPanelTitle] = useState('Panel de Administración');
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isClassModalOpen, setIsClassModalOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate()

  // Cambiar título según la sección
  useEffect(() => {
    if (location.pathname.includes('usuarios')) setPanelTitle('Gestión de Usuarios');
    else if (location.pathname.includes('clases')) setPanelTitle('Gestión de Clases');
    else if (location.pathname.includes('entrenadores')) setPanelTitle('Gestión de Entrenadores');
  }, [location]);

  // Funciones de éxito (Recargar página para ver cambios en tablas)
  const handleSuccess = () => {
    setIsUserModalOpen(false);
    setIsClassModalOpen(false);
    window.location.reload();
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="admin-container">
      <aside className="sidebar">
        <h2 className="sidebar-logo">GYM<span>PRO</span></h2>
        <nav className="sidebar-nav">
          <NavLink to="/AdminSidebar/usuarios" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            <LuUsers className="nav-icon" /> Usuarios
          </NavLink>

          <NavLink to="/AdminSidebar/clases" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            <LuCalendarDays className="nav-icon" /> Clases
          </NavLink>

          <NavLink to="/AdminSidebar/entrenadores" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            <LuDumbbell className="nav-icon" /> Entrenadores
          </NavLink>
        </nav>

        <button className="logout-btn-f" onClick={handleLogout}>
          <LuLogOut className="nav-icon" /> Cerrar Sesión
        </button>
      </aside>

      <main className="main-content">
        <header className="content-header">
          <h1>{panelTitle}</h1>
          <div className="header-buttons">
            <button className="add-btn" onClick={() => setIsUserModalOpen(true)}>
              <LuUserPlus className="btn-icon" /> Nuevo Usuario
            </button>
            <button className="add-btn" onClick={() => setIsClassModalOpen(true)}>
              <LuPlus className="btn-icon" /> Nueva Clase
            </button>
          </div>
        </header>

        {/* Aquí se renderizan las tablas (UserPage, ClassPage, etc.) */}
        <section className="dashboard-card">
          <Outlet />
        </section>

        {/* --- MODAL USUARIOS / ENTRENADORES --- */}
        <Modal
          isOpen={isUserModalOpen}
          onClose={() => setIsUserModalOpen(false)}

        >
          <FormRegisterUsuario onSuccess={handleSuccess} onClose={() => setIsUserModalOpen(false)} />
        </Modal>

        {/* --- MODAL CLASES --- */}
        <Modal
          isOpen={isClassModalOpen}
          onClose={() => setIsClassModalOpen(false)}

        >
          <FormRegisterClass onSuccess={handleSuccess} onClose={() => setIsClassModalOpen(false)} />
        </Modal>

      </main>
    </div>
  );
};

export default AdminSidebar;