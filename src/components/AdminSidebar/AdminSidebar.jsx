import React, { useState } from 'react';
import './AdminLayout.css';

const AdminSidebar = () => {
  // Estado para saber qué tabla mostrar: 'usuarios', 'clases' o 'entrenadores'
  const [view, setView] = useState('usuarios');

  return (
    <div className="admin-container">
      {/* SIDEBAR - Siempre visible */}
      <aside className="sidebar">
        <h2 className="sidebar-logo">GYM<span>PRO</span></h2>
        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${view === 'usuarios' ? 'active' : ''}`} 
            onClick={() => setView('usuarios')}
          >
            Usuarios
          </button>
          <button 
            className={`nav-item ${view === 'clases' ? 'active' : ''}`} 
            onClick={() => setView('clases')}
          >
            Clases
          </button>
          <button 
            className={`nav-item ${view === 'entrenadores' ? 'active' : ''}`} 
            onClick={() => setView('entrenadores')}
          >
            Entrenadores
          </button>
          <button className="nav-item">Reportes</button>
        </nav>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="main-content">
        <header className="content-header">
          {/* El título cambia según la vista seleccionada */}
          <h1>
            {view === 'usuarios' && "Panel de Usuarios"}
            {view === 'clases' && "Panel de Clases"}
            {view === 'entrenadores' && "Panel de Entrenadores"}
          </h1>
          <div className="header-buttons">
            <button className="add-btn">+ Nuevo Usuario</button>
            <button className="add-btn">+ Registrar clases</button>
          </div>
        </header>

        <section className="dashboard-card">
          <table className="admin-table">
            <thead>
              {view === 'usuarios' && (
                <tr>
                  <th>Nombre</th>
                  <th>Estado</th>
                  <th>Entrenador</th>
                  <th>Acciones</th>
                </tr>
              )}
              {view === 'clases' && (
                <tr>
                  <th>Profesor</th>
                  <th>Clase</th>
                  <th>Alumno</th>
                  <th>Acciones</th>
                </tr>
              )}
              {view === 'entrenadores' && (
                <tr>
                  <th>Entrenador</th>
                  <th>Clase Asignada</th>
                  <th>Alumno</th>
                  <th>Acciones</th>
                </tr>
              )}
            </thead>
            <tbody>
              {/* Ejemplo de datos dinámicos según la vista */}
              {view === 'usuarios' && (
                <tr>
                  <td>Juan Pérez</td>
                  <td><span className="status active">Activo</span></td>
                  <td>Jorge Carlos</td>
                  <td><button className="edit-btn">Editar</button></td>
                </tr>
              )}
              {view === 'clases' && (
                <tr>
                  <td>Marcos Ruiz</td>
                  <td>Boxeo</td>
                  <td>Juan Pérez</td>
                  <td><button className="edit-btn">Editar</button></td>
                </tr>
              )}
              {view === 'entrenadores' && (
                <tr>
                  <td>Jorge Carlos</td>
                  <td>Musculación</td>
                  <td>Juan Pérez</td>
                  <td><button className="edit-btn">Editar</button></td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default AdminSidebar;