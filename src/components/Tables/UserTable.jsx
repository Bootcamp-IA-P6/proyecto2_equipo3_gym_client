import React, { useEffect, useState } from 'react';
import userService from '../../services/userService';
import userClassService from '../../services/userClassService';
import classService from '../../services/classService';
import api from '../../services/api'; 
import Swal from 'sweetalert2'; 
import { FiEdit, FiTrash2, FiChevronLeft, FiChevronRight } from 'react-icons/fi'; 
import './TableStyles.css'; 
import Modal from '../../components/Modal/Modal';
import FormRegisterUsuario from '../../components/FormRegisterUsuario/FormRegisterUsuario';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  // --- ESTADOS DE PAGINACIÓN ---
  const [currentPage, setCurrentPage] = useState(0);
  const [limit] = useState(10); // Usuarios por página

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const skip = currentPage * limit;

      // 1. Cargamos datos con paginación
      const [activos, inactivosResponse, todasLasInscripciones, todasLasClases] = await Promise.all([
        userService.getAllUsers(skip, limit), // Enviamos skip y limit
        api.get('/users/', { params: { is_active: false, skip, limit } }),
        userClassService.getAllUserClasses(), // Las inscripciones suelen ser menos pesadas
        classService.getAllClasses()
      ]);

      const todosLosUsuarios = [...activos, ...inactivosResponse.data];

      // 2. Cruce de datos para obtener nombres de clases (Yoga, Pilates, etc.)
      const usuariosProcesados = todosLosUsuarios.map(user => {
        const susInscripciones = todasLasInscripciones.filter(ins => ins.user_id === user.id);
        
        const nombresClases = susInscripciones.map(ins => {
          const claseEncontrada = todasLasClases.find(c => c.id === ins.class_id);
          return claseEncontrada ? claseEncontrada.name : `Clase #${ins.class_id}`;
        });

        return { ...user, nombres_clases: nombresClases };
      });

      setUsers(usuariosProcesados);
    } catch (error) {
      console.error("Error en paginación o cruce de datos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [currentPage]); // Se dispara cada vez que cambias de página

  // --- MANEJADORES DE PÁGINA ---
  const nextPage = () => setCurrentPage(prev => prev + 1);
  const prevPage = () => setCurrentPage(prev => Math.max(0, prev - 1));

  // ... (handleDelete y handleEdit se mantienen igual que antes)
  const handleDelete = (user) => {
    Swal.fire({
      title: '¿Desactivar?',
      text: `El usuario ${user.name} será desactivado.`,
      icon: 'warning',
      background: '#1a1a1a', color: '#fff',
      showCancelButton: true, confirmButtonColor: '#f39c12'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await userService.deleteUser(user.id);
          fetchUsers();
        } catch (error) { console.error(error); }
      }
    });
  };

  const handleEdit = (user) => { setUserToEdit(user); setIsEditModalOpen(true); };
  const handleEditSuccess = () => { setIsEditModalOpen(false); setUserToEdit(null); fetchUsers(); };

  if (loading) return <p style={{color:'white', textAlign:'center', marginTop: '20px'}}>Cargando página {currentPage + 1}...</p>;

  return (
    <div className="table-container">
      <div className="table-responsive">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Clases Inscritas</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name} {user.last_name}</td>
                <td>{user.email}</td>
                <td><span className="role-badge">{user.role}</span></td>
                <td>
                  <div className="classes-list-cell">
                    {user.nombres_clases && user.nombres_clases.length > 0 ? (
                      user.nombres_clases.map((nombre, idx) => (
                        <span key={idx} className="class-tag">{nombre}</span>
                      ))
                    ) : (
                      <span className="no-classes">Sin clases</span>
                    )}
                  </div>
                </td>
                <td>
                  <span className={`status-badge ${user.is_active ? 'active' : 'inactive'}`}>
                    {user.is_active ? 'Activo' : 'Inactivo'}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="icon-btn edit-btn" onClick={() => handleEdit(user)}><FiEdit size={18} /></button>
                    <button className="icon-btn delete-btn" onClick={() => handleDelete(user)}><FiTrash2 size={18} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- CONTROLES DE PAGINACIÓN --- */}
      <div className="pagination-controls">
        <button onClick={prevPage} disabled={currentPage === 0} className="pagi-btn">
          <FiChevronLeft /> Anterior
        </button>
        <span className="page-info">Página {currentPage + 1}</span>
        <button onClick={nextPage} disabled={users.length < limit} className="pagi-btn">
          Siguiente <FiChevronRight />
        </button>
      </div>

      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <FormRegisterUsuario userToEdit={userToEdit} onSuccess={handleEditSuccess} onClose={() => setIsEditModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default UserTable;