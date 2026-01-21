import React, { useState } from 'react';
import classService from '../../services/classService';
import './FormRegisterClass.css';

const FormRegistrarClase = ({ isOpen, onClose, onRefresh }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    is_active: true
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await classService.createClass(formData);
      onRefresh(); // Refresca la tabla
      onClose();   // Cierra el modal
    } catch (error) {
      console.error("Error al crear clase:", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Registrar Nueva Clase</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre de la Clase</label>
            <input 
              type="text" 
              required 
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label>Descripción</label>
            <textarea 
              required 
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </div>
          <div className="modal-actions">
            <button type="button" onClick={onClose} className="btn-cancel">Cancelar</button>
            <button type="submit" className="btn-save">Guardar Clase</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRegistrarClase;