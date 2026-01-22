
// // import React, { useEffect, useState } from 'react';
// // import userService from '../../services/userService';
// // import Swal from 'sweetalert2'; 
// // import { FiEdit, FiTrash2 } from 'react-icons/fi'; 
// // import './TableStyles.css'; 
// // import Modal from '../../components/Modal/Modal';
// // import FormRegisterUsuario from '../../components/FormRegisterUsuario/FormRegisterUsuario';

// // const UserTable = () => {
// //   const [users, setUsers] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   // Estados para MODAL de EDICIÓN
// //   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
// //   const [userToEdit, setUserToEdit] = useState(null);

// //   // Cargar usuarios
// //   // const fetchUsers = async () => {
// //   //   try {
// //   //     const data = await userService.getAllUsers();
// //   //     setUsers(data);
// //   //     setLoading(false);
// //   //   } catch (error) {
// //   //     console.error("Error:", error);
// //   //     setLoading(false);
// //   //   }
// //   // };
// //   const fetchUsers = async () => {
// //   try {
// //     // Hacemos dos peticiones en paralelo: una para activos y otra para inactivos
// //     const [activos, inactivos] = await Promise.all([
// //       userService.getAllUsers(0, 100), // Trae activos por defecto
// //       api.get('/users/', { params: { is_active: false } }) // Trae inactivos
// //     ]);

// //     // Combinamos ambas listas
// //     const allUsers = [...activos, ...inactivos.data];
// //     setUsers(allUsers);
// //   } catch (error) {
// //     console.error('Error al cargar usuarios:', error);
// //   }
// // };

// //   useEffect(() => {
// //     fetchUsers();
// //   }, []);

// //   // --- BORRAR USUARIO ---
// //   // --- LÓGICA DE DESACTIVAR (SOFT DELETE) ---
// //   const handleDelete = (id, name) => {
// //     Swal.fire({
// //       title: '¿Desactivar usuario?',
// //       text: `El usuario ${name} pasará a estado INACTIVO, pero no se borrará.`,
// //       icon: 'warning',
// //       background: '#1a1a1a',
// //       color: '#fff',
// //       showCancelButton: true,
// //       confirmButtonColor: '#f39c12', // Naranja (aviso) en vez de Rojo (peligro)
// //       cancelButtonColor: '#3085d6',
// //       confirmButtonText: 'Sí, desactivar',
// //       cancelButtonText: 'Cancelar'
// //     }).then(async (result) => {
// //       if (result.isConfirmed) {
// //         try {
// //           // CAMBIO CLAVE: En vez de deleteUser, usamos updateUser con is_active: false
// //           await userService.updateUser(id, { is_active: false });
          
// //           Swal.fire({
// //             title: '¡Desactivado!',
// //             text: 'El usuario ahora está inactivo.',
// //             icon: 'success',
// //             background: '#1a1a1a',
// //             color: '#fff',
// //             confirmButtonColor: '#2DD4BF'
// //           });
          
// //           fetchUsers(); // Recargamos para ver la etiqueta roja de "Inactivo"
// //         } catch (error) {
// //           console.error(error);
// //           Swal.fire({
// //             title: 'Error',
// //             text: 'No se pudo desactivar el usuario.',
// //             icon: 'error',
// //             background: '#1a1a1a',
// //             color: '#fff'
// //           });
// //         }
// //       }
// //     });
// //   };
// //   // --- EDITAR USUARIO ---
// //   const handleEdit = (user) => {
// //     setUserToEdit(user);       // 1. Guardamos el usuario a editar
// //     setIsEditModalOpen(true);  // 2. Abrimos modal
// //   };

// //   const handleEditSuccess = () => {
// //     setIsEditModalOpen(false);
// //     setUserToEdit(null);
// //     fetchUsers(); // Recargamos la tabla
// //   };

// //   if (loading) return <p style={{color:'white'}}>Cargando...</p>;

// //   return (
// //     <div className="table-responsive">
// //       <table className="admin-table">
// //         <thead>
// //           <tr>
// //             <th>Nombre</th>
// //             <th>Email</th>
// //             <th>Rol</th>
// //             <th>Estado</th>
// //             <th>Acciones</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {users.map((user) => (
// //             <tr key={user.id}>
// //               <td>{user.name} {user.last_name}</td>
// //               <td>{user.email}</td>
// //               <td><span className="role-badge">{user.role}</span></td>
// //               <td>
// //                 <span className={`status-badge ${user.is_active ? 'active' : 'inactive'}`}>
// //                   {user.is_active ? 'Activo' : 'Inactivo'}
// //                 </span>
// //               </td>
// //               <td>
// //                 <div className="action-buttons">
// //                   <button 
// //                     className="icon-btn edit-btn" 
// //                     onClick={() => handleEdit(user)}
// //                     title="Editar"
// //                   >
// //                     <FiEdit size={18} />
// //                   </button>
// //                   <button 
// //                     className="icon-btn delete-btn" 
// //                     onClick={() => handleDelete(user.id, user.name)}
// //                     title="Eliminar"
// //                   >
// //                     <FiTrash2 size={18} />
// //                   </button>
// //                 </div>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>

// //       {/* MODAL OCULTO PARA EDITAR */}
// //       <Modal 
// //         isOpen={isEditModalOpen} 
// //         onClose={() => setIsEditModalOpen(false)}
// //       >
// //         <FormRegisterUsuario 
// //             userToEdit={userToEdit} // <--- CLAVE PARA EDITAR
// //             onSuccess={handleEditSuccess}
// //             onClose={() => setIsEditModalOpen(false)}
// //         />
// //       </Modal>
// //     </div>
// //   );
// // };

// // export default UserTable;
// import React, { useEffect, useState } from 'react';
// import userService from '../../services/userService'; //
// import Swal from 'sweetalert2'; 
// import { FiEdit, FiTrash2 } from 'react-icons/fi'; 
// import './TableStyles.css'; 
// import Modal from '../../components/Modal/Modal';
// import FormRegisterUsuario from '../../components/FormRegisterUsuario/FormRegisterUsuario';

// const UserTable = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [userToEdit, setUserToEdit] = useState(null);

//   const fetchUsers = async () => {
//     try {
//       const data = await userService.getAllUsers();
//       setUsers(data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error:", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const handleDelete = (user) => {
//     Swal.fire({
//       title: '¿Desactivar usuario?',
//       text: `El usuario ${user.name} pasará a estado INACTIVO, pero no se borrará.`,
//       icon: 'warning',
//       background: '#1a1a1a',
//       color: '#fff',
//       showCancelButton: true,
//       confirmButtonColor: '#f39c12',
//       cancelButtonColor: '#3085d6',
//       confirmButtonText: 'Sí, desactivar',
//       cancelButtonText: 'Cancelar'
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           // CORRECCIÓN AQUÍ: Usamos el servicio, NO 'api' directamente
//           await userService.updateUser(user.id, { ...user, is_active: false });
          
//           Swal.fire({
//             title: '¡Desactivado!',
//             text: 'El usuario ahora está inactivo.',
//             icon: 'success',
//             background: '#1a1a1a',
//             color: '#fff',
//             confirmButtonColor: '#2DD4BF'
//           });
          
//           fetchUsers(); 
//         } catch (error) {
//           console.error(error);
//           Swal.fire({
//             title: 'Error',
//             text: 'No se pudo desactivar el usuario.',
//             icon: 'error',
//             background: '#1a1a1a',
//             color: '#fff'
//           });
//         }
//       }
//     });
//   };

//   const handleEdit = (user) => {
//     setUserToEdit(user);
//     setIsEditModalOpen(true);
//   };

//   const handleEditSuccess = () => {
//     setIsEditModalOpen(false);
//     setUserToEdit(null);
//     fetchUsers();
//   };

//   if (loading) return <p style={{color:'white'}}>Cargando...</p>;

//   return (
//     <div className="table-responsive">
//       <table className="admin-table">
//         <thead>
//           <tr>
//             <th>Nombre</th>
//             <th>Email</th>
//             <th>Rol</th>
//             <th>Estado</th>
//             <th>Acciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user.name} {user.last_name}</td>
//               <td>{user.email}</td>
//               <td><span className="role-badge">{user.role}</span></td>
//               <td>
//                 <span className={`status-badge ${user.is_active ? 'active' : 'inactive'}`}>
//                   {user.is_active ? 'Activo' : 'Inactivo'}
//                 </span>
//               </td>
//               <td>
//                 <div className="action-buttons">
//                   <button 
//                     className="icon-btn edit-btn" 
//                     onClick={() => handleEdit(user)}
//                     title="Editar"
//                   >
//                     <FiEdit size={18} />
//                   </button>
//                   <button 
//                     className="icon-btn delete-btn" 
//                     onClick={() => handleDelete(user)}
//                     title="Eliminar"
//                   >
//                     <FiTrash2 size={18} />
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
//         <FormRegisterUsuario 
//             userToEdit={userToEdit}
//             onSuccess={handleEditSuccess}
//             onClose={() => setIsEditModalOpen(false)}
//         />
//       </Modal>
//     </div>
//   );
// };

// export default UserTable;
import React, { useEffect, useState } from 'react';
import userService from '../../services/userService';
import api from '../../services/api'; // Importamos api para la petición personalizada
import Swal from 'sweetalert2'; 
import { FiEdit, FiTrash2 } from 'react-icons/fi'; 
import './TableStyles.css'; 
import Modal from '../../components/Modal/Modal';
import FormRegisterUsuario from '../../components/FormRegisterUsuario/FormRegisterUsuario';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  // Función para cargar usuarios (Activos e Inactivos)
  const fetchUsers = async () => {
    try {
      setLoading(true);
      // El backend por defecto solo devuelve activos (is_active=True)
      // Hacemos dos peticiones para obtener ambos estados
      const [activos, inactivosResponse] = await Promise.all([
        userService.getAllUsers(),
        api.get('/users/', { params: { is_active: false } })
      ]);

      const inactivos = inactivosResponse.data;
      
      // Combinamos ambas listas en el estado
      setUsers([...activos, ...inactivos]);
      setLoading(false);
    } catch (error) {
      console.error("Error al cargar usuarios:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Lógica para "Borrado Lógico" (Desactivar)
  const handleDelete = (user) => {
    Swal.fire({
      title: '¿Desactivar usuario?',
      text: `El usuario ${user.name} pasará a estado INACTIVO en la base de datos.`,
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
          // Usamos el método DELETE del servicio
          // Esto activa la función delete_user en el backend que pone is_active = False
          await userService.deleteUser(user.id);
          
          Swal.fire({
            title: '¡Desactivado!',
            text: 'El usuario ahora está inactivo en la base de datos.',
            icon: 'success',
            background: '#1a1a1a',
            color: '#fff',
            confirmButtonColor: '#2DD4BF'
          });
          
          fetchUsers(); // Recargamos la tabla para ver el cambio de estado
        } catch (error) {
          console.error("Error al desactivar:", error);
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

  const handleEdit = (user) => {
    setUserToEdit(user);
    setIsEditModalOpen(true);
  };

  const handleEditSuccess = () => {
    setIsEditModalOpen(false);
    setUserToEdit(null);
    fetchUsers();
  };

  if (loading) return <p style={{color:'white'}}>Cargando usuarios...</p>;

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
                    onClick={() => handleDelete(user)}
                    title="Desactivar"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
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

export default UserTable;