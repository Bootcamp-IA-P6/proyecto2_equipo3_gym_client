import React, { useState, useEffect} from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './AdminSidebar.css';
import Modal from '../../components/Modal/Modal'; 
import FormRegisterUsuario from '../../components/FormRegisterUsuario/FormRegisterUsuario';
import FormRegisterClass from '../../components/FormRegisterClass/FormRegisterClass';


const AdminSidebar= () => {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  // Función auxiliar para cuando se crea el usuario con éxito
  const handleSuccess = () => {
    setIsUserModalOpen(false); // Cerramos el modal
    window.location.reload(); 
  };

const AdminSidebar = () => {
  const [panelTitle, setPanelTitle] = useState('Panel de Usuarios');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path.includes('usuarios')) setPanelTitle('Panel de Usuarios');
    else if (path.includes('clases')) setPanelTitle('Panel de Clases');
    else if (path.includes('membresias')) setPanelTitle('Panel de Membresías');
    else if (path.includes('reportes')) setPanelTitle('Panel de Reportes');
  }, [location]);

  // Función para manejar el refresco de datos
  const handleRefresh = () => {
    // Si la función global existe en el window (creada en ClassPage), la ejecuta
    if (window.refreshClassTable) {
      window.refreshClassTable();
    }
  };

  return (
    <div className="admin-container">
      <aside className="sidebar">
        <h2 className="sidebar-logo">GYM<span>PRO</span></h2>
        <nav className="sidebar-nav">
          <NavLink to="/AdminSidebar/usuarios" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            Usuarios
          </NavLink>
          <NavLink to="/AdminSidebar/clases" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            Clases
          </NavLink>
          <NavLink to="/AdminSidebar/membresias" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            Membresías
          </NavLink>
          <NavLink to="/AdminSidebar/reportes" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            Reportes
          </NavLink>
        </nav>
        <button className="logout-btn-f">Cerrar Sesión</button>
      </aside>

      <main className="main-content">
        <header className="content-header">
          <h1>{panelTitle}</h1>
          <div className="header-buttons">
            <button 
              className="add-btn" 
              onClick={() => setIsUserModalOpen(true)}
            >
              + Nuevo Usuario
            </button>
            <button className="add-btn">+ Registrar clases</button>
            <button className="add-btn">+ Nuevo Usuario</button>
            <button className="add-btn" onClick={() => setIsModalOpen(true)}>
              + Registrar clases
            </button>
          </div>
        </header>

        <section className="dashboard-card">
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

      {/* 4. Componente con el onRefresh añadido */}
      <FormRegisterClass
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onRefresh={handleRefresh}
      />
    </div>
  );
};
}

export default AdminSidebar;