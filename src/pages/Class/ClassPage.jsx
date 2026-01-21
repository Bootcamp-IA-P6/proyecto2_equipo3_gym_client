import React, { useState, useEffect } from 'react';
import classService from '../../services/classService'; // Importamos tu servicio
import './ClassPage.css';

const ClassPage = () => {
  const [clases, setClases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Usamos tu función getAllClasses del service
        const data = await classService.getAllClasses();
        setClases(data);
      } catch (error) {
        console.error("Error al obtener las clases:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="loading">Cargando clases...</div>;

  return (
    <div className="table-wrapper">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clases.length > 0 ? (
            clases.map((clase, index) => (
              <tr key={index}>
                <td className="clase-name">{clase.name}</td>
                <td className="clase-desc">{clase.description}</td>
                <td>
                  <span className={`status-pill ${clase.is_active ? 'active' : 'inactive'}`}>
                    {clase.is_active ? 'Activa' : 'Inactiva'}
                  </span>
                </td>
                <td>
                  <button className="edit-btn">Editar</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>No hay clases registradas.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ClassPage;