
import React, { useEffect, useState } from 'react';
import userService from '../../services/userService';
import Swal from 'sweetalert2'; 
import { FiEdit, FiTrash2 } from 'react-icons/fi'; 
import './TableStyles.css'; 
import Modal from '../../components/Modal/Modal';
import FormRegisterUsuario from '../../components/FormRegisterUsuario/FormRegisterUsuario';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Estados para MODAL de EDICIÓN
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  // Cargar usuarios
  const fetchUsers = async () => {
    try {
      const data = await userService.getAllUsers();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // --- BORRAR USUARIO ---
  // --- LÓGICA DE DESACTIVAR (SOFT DELETE) ---
  const handleDelete = (id, name) => {
    Swal.fire({
      title: '¿Desactivar usuario?',
      text: `El usuario ${name} pasará a estado INACTIVO, pero no se borrará.`,
      icon: 'warning',
      background: '#1a1a1a',
      color: '#fff',
      showCancelButton: true,
      confirmButtonColor: '#f39c12', // Naranja (aviso) en vez de Rojo (peligro)
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, desactivar',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // CAMBIO CLAVE: En vez de deleteUser, usamos updateUser con is_active: false
          await userService.updateUser(id, { is_active: false });
          
          Swal.fire({
            title: '¡Desactivado!',
            text: 'El usuario ahora está inactivo.',
            icon: 'success',
            background: '#1a1a1a',
            color: '#fff',
            confirmButtonColor: '#2DD4BF'
          });
          
          fetchUsers(); // Recargamos para ver la etiqueta roja de "Inactivo"
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: 'Error',
            text: 'No se pudo desactivar el usuario.',
            icon: 'error',
            background: '#1a1a1a',
            color: '#fff'
          });
        }
      }
    });
  };
  // --- EDITAR USUARIO ---
  const handleEdit = (user) => {
    setUserToEdit(user);       // 1. Guardamos el usuario a editar
    setIsEditModalOpen(true);  // 2. Abrimos modal
  };

  const handleEditSuccess = () => {
    setIsEditModalOpen(false);
    setUserToEdit(null);
    fetchUsers(); // Recargamos la tabla
  };

  if (loading) return <p style={{color:'white'}}>Cargando...</p>;

  return (
    <div className="table-responsive">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
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
                <span className={`status-badge ${user.is_active ? 'active' : 'inactive'}`}>
                  {user.is_active ? 'Activo' : 'Inactivo'}
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button 
                    className="icon-btn edit-btn" 
                    onClick={() => handleEdit(user)}
                    title="Editar"
                  >
                    <FiEdit size={18} />
                  </button>
                  <button 
                    className="icon-btn delete-btn" 
                    onClick={() => handleDelete(user.id, user.name)}
                    title="Eliminar"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MODAL OCULTO PARA EDITAR */}
      <Modal 
        isOpen={isEditModalOpen} 
        onClose={() => setIsEditModalOpen(false)}
      >
        <FormRegisterUsuario 
            userToEdit={userToEdit} // <--- CLAVE PARA EDITAR
            onSuccess={handleEditSuccess}
            onClose={() => setIsEditModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default UserTable;