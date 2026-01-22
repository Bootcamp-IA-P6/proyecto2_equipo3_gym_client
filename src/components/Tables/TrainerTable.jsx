import React, { useEffect, useState } from 'react';
import trainerService from '../../services/trainerService';
import Swal from 'sweetalert2';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import './TableStyles.css';

// Componentes para Editar
import Modal from '../../components/Modal/Modal';
import FormRegisterUsuario from '../../components/FormRegisterUsuario/FormRegisterUsuario';

const TrainerTable = () => {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Estados para Editar
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  // 1. Cargar Entrenadores
  const fetchTrainers = async () => {
    try {
      const data = await trainerService.getAllTrainers();
      setTrainers(data);
      setLoading(false);
    } catch (error) {
      console.error("Error cargando entrenadores:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrainers();
  }, []);

  //Elimianar entrenador
  // --- LÓGICA DE DESACTIVAR ENTRENADOR ---
  const handleDelete = (id, trainerName) => {
    Swal.fire({
      title: '¿Desactivar entrenador?',
      text: `El entrenador ${trainerName} dejará de estar activo.`,
      icon: 'warning',
      background: '#1a1a1a',
      color: '#fff',
      showCancelButton: true,
      confirmButtonColor: '#f39c12', // Naranja
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, desactivar',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // CAMBIO CLAVE: Actualizamos el entrenador poniendo is_active: false
          // Nota: Asegúrate de tener updateTrainer en tu servicio
          await trainerService.updateTrainer(id, { is_active: false });
          
          Swal.fire({
            title: '¡Desactivado!',
            text: 'El entrenador ha sido dado de baja temporalmente.',
            icon: 'success',
            background: '#1a1a1a',
            color: '#fff',
            confirmButtonColor: '#2DD4BF'
          });
          
          fetchTrainers(); // Recargamos la tabla
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: 'Error',
            text: 'No se pudo desactivar el entrenador.',
            icon: 'error',
            background: '#1a1a1a',
            color: '#fff'
          });
        }
      }
    });
  };
  // 3. Lógica de Editar
  const handleEdit = (trainer) => {
    if (trainer.user) {
      const userPrepared = {
        ...trainer.user, 
        role: 'trainer', 
      };
      setUserToEdit(userPrepared);
      setIsEditModalOpen(true);
    } else {
      Swal.fire('Error', 'Este entrenador no tiene usuario asociado.', 'error');
    }
  };

  const handleEditSuccess = () => {
    setIsEditModalOpen(false);
    setUserToEdit(null);
    fetchTrainers();
  };

  if (loading) return <p style={{color:'white', textAlign:'center'}}>Cargando entrenadores...</p>;

  return (
    <div className="table-responsive">
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre Completo</th>
            <th>Especialidad</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map((trainer) => {
            // Preparamos el nombre para mostrarlo y usarlo en la alerta
            const displayName = trainer.user 
                ? `${trainer.user.name} ${trainer.user.last_name}` 
                : `ID #${trainer.id}`;

            return (
              <tr key={trainer.id}>
                <td>#{trainer.id}</td>
                <td>{displayName}</td>
                <td>
                  <span className="role-badge" style={{background: 'rgba(45, 212, 191, 0.1)', color: '#2DD4BF'}}>
                    {trainer.specialty}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${trainer.is_active ? 'active' : 'inactive'}`}>
                    {trainer.is_active ? 'ACTIVO' : 'INACTIVO'}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    {/* Botón EDITAR */}
                    <button 
                      className="icon-btn edit-btn" 
                      onClick={() => handleEdit(trainer)}
                      title="Editar Perfil"
                    >
                      <FiEdit size={18} />
                    </button>

                    {/* Botón ELIMINAR (Ahora sí está aquí) */}
                    <button 
                      className="icon-btn delete-btn" 
                      onClick={() => handleDelete(trainer.id, displayName)}
                      title="Dar de baja"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Modal de Edición */}
      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <FormRegisterUsuario 
          userToEdit={userToEdit}
          onSuccess={handleEditSuccess}
          onClose={() => setIsEditModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default TrainerTable;