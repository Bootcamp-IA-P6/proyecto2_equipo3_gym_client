import React, { useState } from 'react';
import './AdminSidebar.css';

const AdminSidebar = () => {
  const [view, setView] = useState('usuarios');

  return (
    <div className="admin-container">
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

      <main className="main-content">
        <header className="content-header">
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
              {/* Tabla Clases basada en tu DB Classes */}
              {view === 'clases' && (
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Estado (Active)</th>
                  <th>Acciones</th>
                </tr>
              )}
              {/* Tabla Entrenadores basada en tu DB Trainers */}
              {view === 'entrenadores' && (
                <tr>
                  <th>ID Entrenador</th> {/* id int4 */}
                  <th>ID Usuario</th> {/* user_id int4 */}
                  <th>Especialidad</th> {/* specialty varchar */}
                  <th>Estado</th> {/* is_active bool */}
                  <th>Acciones</th>
                </tr>
              )}
            </thead>
            <tbody>
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
                  <td>1</td>
                  <td>Pilates</td>
                  <td>Clase de pilates</td>
                  <td><span className="status active">TRUE</span></td>
                  <td><button className="edit-btn">Editar</button></td>
                </tr>
              )}

              {/* Ejemplo con tus datos reales de Trainers */}
              {view === 'entrenadores' && (
                <>
                  <tr>
                    <td>2</td>
                    <td>2</td>
                    <td>Pilates</td>
                    <td><span className="status active">TRUE</span></td>
                    <td><button className="edit-btn">Editar</button></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>3</td>
                    <td>Yoga</td>
                    <td><span className="status active">TRUE</span></td>
                    <td><button className="edit-btn">Editar</button></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>2</td>
                    <td>Yoga</td>
                    <td><span className="status inactive">FALSE</span></td>
                    <td><button className="edit-btn">Editar</button></td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default AdminSidebar;