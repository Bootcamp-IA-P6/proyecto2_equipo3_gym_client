import React from 'react';
import './RegisterUsuario.css';

const RegisterUsuario = () => {
  return (
    <div className="register-screen">
      <div className="register-container">
        <header className="register-header">
          <h1>Alta de Usuario</h1>
          <p>Configuración de nuevo perfil en el sistema</p>
        </header>

        <form className="register-form">
          <div className="form-section">
            <h3>Datos de Acceso</h3>
            <div className="form-grid">
              <div className="input-box">
                <label>Tipo de Perfil</label>
                <select className="register-select">
                  <option value="cliente">Cliente (Usuario de Clases)</option>
                  <option value="profesor">Profesor (Gestor de Clases)</option>
                </select>
              </div>
              <div className="input-box">
                <label>Contraseña de acceso</label>
                <input type="password" placeholder="********" />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Información Personal</h3>
            <div className="form-grid">
              <div className="input-box">
                <label>Nombre Completo</label>
                <input type="text" placeholder="Nombre y Apellidos" />
              </div>
              <div className="input-box">
                <label>Correo Electrónico</label>
                <input type="email" placeholder="ejemplo@gym.com" />
              </div>
              <div className="input-box">
                <label>Teléfono de contacto</label>
                <input type="tel" placeholder="+34 000 000 000" />
              </div>
              <div className="input-box">
                <label>DNI / Identificación</label>
                <input type="text" placeholder="Documento oficial" />
              </div>
            </div>
          </div>

          <div className="register-actions">
            <button type="button" className="back-btn">Volver al Panel</button>
            <button type="submit" className="save-user-btn">Confirmar Registro</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterUsuario;