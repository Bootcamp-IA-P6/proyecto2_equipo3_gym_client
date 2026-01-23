import React, { useEffect, useState } from 'react';
import classService from '../../services/classService';
import Swal from 'sweetalert2';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import './TableStyles.css';

// IMPORTS NECESARIOS
import Modal from '../../components/Modal/Modal';
import FormRegisterClass from '../../components/FormRegisterClass/FormRegisterClass';

const ClassTable = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  // ESTADOS DE EDICIÓN
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [classToEdit, setClassToEdit] = useState(null);

  const fetchClasses = async () => {
    try {
      const data = await classService.getAllClasses();
      setClasses(data);
      setLoading(false);
    } catch (error) {
      console.error("Error cargando clases:", error);
      setLoading(false);
    }
  };

  useEffect(() => { fetchClasses(); }, []);

  // --- ELIMINAR ---
  const handleDelete = (id, name) => {
    Swal.fire({
      title: '¿Eliminar clase?',
      text: `Borrarás "${name}".`,
      icon: 'warning',
      background: '#1a1a1a', color: '#fff',
      showCancelButton: true, confirmButtonColor: '#d33',
      confirmButtonText: 'Sí, borrar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await classService.deleteClass(id);
          Swal.fire({title:'¡Borrada!', icon:'success', background:'#1a1a1a', color:'#fff', confirmButtonColor: '#2DD4BF'});
          fetchClasses();
        } catch (error) {
          Swal.fire('Error', 'No se pudo eliminar.', 'error');
        }
      }
    });
  };

  // --- EDITAR ---
  const handleEdit = (cls) => {
    setClassToEdit(cls);      // 1. Guardamos la clase a editar
    setIsEditModalOpen(true); // 2. Abrimos el modal
  };

  const handleEditSuccess = () => {
    setIsEditModalOpen(false);
    setClassToEdit(null);
    fetchClasses();
  };

  if (loading) return <p style={{color:'white'}}>Cargando...</p>;

  return (
    <div className="table-responsive">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((cls) => (
            <tr key={cls.id}>
              <td style={{fontWeight:'bold'}}>{cls.name}</td>
              <td>{cls.description}</td>
              <td>
                <div className="action-buttons">
                  <button className="icon-btn edit-btn" onClick={() => handleEdit(cls)}>
                    <FiEdit size={18} />
                  </button>
                  <button className="icon-btn delete-btn" onClick={() => handleDelete(cls.id, cls.name)}>
                    <FiTrash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MODAL PARA EDITAR CLASES */}
      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <FormRegisterClass 
          classToEdit={classToEdit} // <-- ¡IMPORTANTE!
          onSuccess={handleEditSuccess}
          onClose={() => setIsEditModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default ClassTable;