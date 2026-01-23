import React, { useState, useEffect } from 'react';
import classService from '../../services/classService';
import './FormRegisterClass.css';


const FormRegisterClass = ({ onSuccess, onClose, classToEdit }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);

 
  useEffect(() => {
    if (classToEdit) {
      setFormData({
        name: classToEdit.name || '',
        description: classToEdit.description || '',
      });
    }
  }, [classToEdit]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (classToEdit) {
        
        await classService.updateClass(classToEdit.id, formData);
        alert('Clase actualizada correctamente');
      } else {
        // --- MODO CREACIÓN ---
        await classService.createClass(formData);
        alert('Clase creada con éxito');
      }
      
      setLoading(false);
      if (onSuccess) onSuccess();
      if (onClose) onClose();
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert('Error al guardar la clase');
    }
  };

  return (
    <div className="register-container">
      <header className="register-header">
        <h1>{classToEdit ? 'Editar Clase' : 'Nueva Clase'}</h1>
        <p>{classToEdit ? 'Modifica los detalles de la actividad' : 'Añade una nueva actividad al catálogo'}</p>
      </header>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="input-box full-width">
            <label>Nombre de la Clase</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Ej: Crossfit Avanzado" 
              required 
              value={formData.name} 
              onChange={handleChange} 
            />
          </div>

          <div className="input-box full-width">
            <label>Descripción</label>
            <textarea 
              name="description" 
              placeholder="¿En qué consiste esta actividad?"
              value={formData.description} 
              onChange={handleChange} 
              rows="4"
            />
          </div>
        </div>

        <div className="register-actions">
          <button type="button" className="back-btn" onClick={onClose}>Cancelar</button>
          <button type="submit" className="save-user-btn" disabled={loading}>
            {loading ? 'Guardando...' : (classToEdit ? 'Actualizar' : 'Crear Clase')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormRegisterClass;