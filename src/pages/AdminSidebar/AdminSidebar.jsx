import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './AdminSidebar.css';
import Modal from '../../components/Modal/Modal'; 
import FormRegisterUsuario from '../../components/FormRegisterUsuario/FormRegisterUsuario';

const AdminSidebar= () => {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  // Función auxiliar para cuando se crea el usuario con éxito
  const handleSuccess = () => {
    setIsUserModalOpen(false); // Cerramos el modal
    window.location.reload(); 
  };
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
            <button 
              className="add-btn" 
              onClick={() => setIsUserModalOpen(true)}
            >
              + Nuevo Usuario
            </button>
            <button className="add-btn">+ Registrar clases</button>
          </div>
        </header>

        <section className="dashboard-card">
          {/* Aquí es donde React Router meterá la tabla correspondiente */}
          <Outlet />
        </section>
        {/* 5. AÑADE EL COMPONENTE MODAL AL FINAL DEL MAIN (FUERA DEL OUTLET) */}
        <Modal 
          isOpen={isUserModalOpen} 
          onClose={() => setIsUserModalOpen(false)}
          title="Registrar Nuevo Usuario"
        >
          <FormRegisterUsuario 
            onSuccess={handleSuccess}
            onClose={() => setIsUserModalOpen(false)}
          />
        </Modal>
      </main>
    </div>
  );
};

export default AdminSidebar;