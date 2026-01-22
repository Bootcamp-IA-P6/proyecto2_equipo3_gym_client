import React, { useEffect, useState } from 'react';
import trainerService from '../../services/trainerService';
import api from '../../services/api'; 
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

  // 1. Cargar Entrenadores (Activos e Inactivos)
  const fetchTrainers = async () => {
    try {
      setLoading(true);
      // El backend filtra por is_active=true por defecto.
      // Realizamos peticiones para ambos estados para mostrar la lista completa.
      const [activos, inactivosResponse] = await Promise.all([
        trainerService.getAllTrainers(),
        api.get('/trainers/', { params: { is_active: false } })
      ]);

      const inactivos = inactivosResponse.data;
      
      setTrainers([...activos, ...inactivos]);
      setLoading(false);
    } catch (error) {
      console.error("Error cargando entrenadores:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrainers();
  }, []);

  // --- LÓGICA DE DESACTIVAR ENTRENADOR (SOFT DELETE) ---
  const handleDelete = (id, trainerName) => {
    Swal.fire({
      title: '¿Desactivar entrenador?',
      text: `El entrenador ${trainerName} pasará a estado INACTIVO en la base de datos.`,
      icon: 'warning',
      background: '#1a1a1a',
      color: '#fff',
      showCancelButton: true,
      confirmButtonColor: '#f39c12',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, desactivar',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Usamos el método DELETE que en el backend ya fuerza is_active = False.
          await trainerService.deleteTrainer(id);
          
          Swal.fire({
            title: '¡Desactivado!',
            text: 'El entrenador ahora figura como inactivo.',
            icon: 'success',
            background: '#1a1a1a',
            color: '#fff',
            confirmButtonColor: '#2DD4BF'
          });
          
          fetchTrainers(); 
        } catch (error) {
          console.error(error);
          // Capturamos el error específico del backend si tiene clases activas.
          const errorMsg = error.response?.data?.detail || 'No se pudo desactivar el entrenador.';
          Swal.fire({
            title: 'Error',
            text: errorMsg,
            icon: 'error',
            background: '#1a1a1a',
            color: '#fff'
          });
        }
      }
    });
  };

  const handleEdit = (trainer) => {
    if (trainer.user) {
      // Preparamos los datos del usuario vinculado al entrenador.
      const userPrepared = {
        ...trainer.user, 
        trainer_id: trainer.id,
        id: trainer.user_id, // Usamos el ID del usuario para la actualización.
        role: 'trainer',
        is_active: trainer.is_active 
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
                    <button 
                      className="icon-btn edit-btn" 
                      onClick={() => handleEdit(trainer)}
                      title="Editar y Activar"
                    >
                      <FiEdit size={18} />
                    </button>

                    <button 
                      className="icon-btn delete-btn" 
                      onClick={() => handleDelete(trainer.id, displayName)}
                      title="Dar de baja"
                      disabled={!trainer.is_active}
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