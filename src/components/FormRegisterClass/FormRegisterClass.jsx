import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classService from '../../services/classService';
import './FormRegisterClass.css';

const FormRegisterClass = ({ isOpen, onClose, onRefresh }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 1. Intentamos guardar con la nueva ruta /gym_classes/ del servicio
      await classService.createClass(formData);
      
      // 2. Si tiene éxito, ejecutamos el refresco de la tabla (el puente)
      if (onRefresh) onRefresh(); 
      
      // 3. Cerramos el modal
      onClose();                  
      
      // 4. Redirección: Según tu AdminSidebar, la ruta es /admin/clases
      navigate('/AdminSidebar/clases'); 
      
      // 5. Limpiamos el formulario
      setFormData({ name: '', description: '' });
      
      console.log("Clase creada con éxito");
    } catch (error) {
      console.error("Error al crear clase:", error);
      // Detalle para depuración
      if (error.response && error.response.status === 404) {
        alert("Error 404: El servidor no reconoce la ruta /gym_classes/. Verifica con tus compañeros si falta un prefijo como /api.");
      } else {
        alert("Ocurrió un error al intentar guardar la disciplina.");
      }
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Registrar Clase</h2>
        </div>
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-input-group">
            <label>Nombre de la Disciplina</label>
            <input 
              type="text" 
              required 
              placeholder="Ej. Yoga, Boxeo..."
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="form-input-group">
            <label>Descripción</label>
            <textarea 
              required 
              placeholder="Describe brevemente la actividad..."
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </div>
          <div className="modal-footer-actions">
            <button type="button" onClick={onClose} className="btn-secondary">
              Descartar
            </button>
            <button type="submit" className="btn-primary">
              Guardar Disciplina
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRegisterClass;