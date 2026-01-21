import React from 'react';
import './ClassRegister.css';

const ClassRegister = () => {
  return (
    <div className="class-screen">
      <div className="class-container">
        <header className="class-header">
          <h1>Registro de Clases</h1>
          <p>Configura las actividades, horarios y entrenadores</p>
        </header>

        <form className="class-form" onSubmit={(e) => e.preventDefault()}>
          
          <div className="form-section">
            <h3>Detalles de la Actividad</h3>
            <div className="form-grid">
              <div className="input-box full-width">
                <label>Nombre de la Disciplina</label>
                <input type="text" placeholder="Ej. Crossfit Avanzado, Yoga Flow, Boxeo..." />
              </div>
              <div className="input-box">
                <label>Instructor / Profesor</label> 
                <select className="class-select">
                  <option value="">Seleccionar profesor...</option>
                  <option value="1">Carlos (Musculación)</option>
                  <option value="2">Ana (Pilates)</option>
                </select>
              </div>
              <div className="input-box">
                <label>Cupos Disponibles</label>
                <input type="number" placeholder="Máx. personas" />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Horario y Ubicación</h3>
            <div className="form-grid">
              <div className="input-box">
                <label>Día</label>
                <select className="class-select">
                  <option value="Lunes">Lunes</option>
                  <option value="Martes">Martes</option>
                  <option value="Miércoles">Miércoles</option>
                  <option value="Jueves">Jueves</option>
                  <option value="Viernes">Viernes</option>
                  <option value="Sábado">Sábado</option>
                </select>
              </div>
              <div className="input-box">
                <label>Hora de Inicio</label>
                <input type="time" />
              </div>
              <div className="input-box">
                <label>Duración (minutos)</label>
                <input type="number" placeholder="Ej. 60" />
              </div>
              <div className="input-box">
                <label>Sala / Área</label>
                <input type="text" placeholder="Sala A, Zona Exterior..." />
              </div>
            </div>
          </div>

          <div className="class-actions">
            <button type="button" className="btn-secondary">Volver al Panel</button>
            <button type="submit" className="btn-primary">Publicar Clase</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClassRegister;