

// import React, { useEffect, useState } from 'react';
// import userService from '../../services/userService'; // Importamos el servicio
// import { useNavigate } from 'react-router-dom';
// import "./Users.css"; // Asegúrate de que este archivo exista para los estilos

// const UsersList = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Función para pedir los usuarios al backend
//     const fetchUsers = async () => {
//       try {
//         const data = await userService.getAllUsers();
//         setUsers(data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error al cargar usuarios:", err);
//         setError("No se pudieron cargar los usuarios.");
//         setLoading(false);
        
//         // Opcional: Si el error es 401 (Token vencido), redirigir al login
//         if (err.response && err.response.status === 401) {
//              navigate('/login');
//         }
//       }
//     };

//     fetchUsers();
//   }, [navigate]);

//   const handleLogout = () => {
//     // Limpiamos el token y vamos al login
//     localStorage.removeItem('token');
//     localStorage.removeItem('role');
//     navigate('/login');
//   };

//   if (loading) return <div className="users-page"><p>Cargando usuarios...</p></div>;
//   if (error) return <div className="users-page"><p className="error-message">{error}</p></div>;

//   return (
//     <div className="users-page">
//       <div className="header-actions" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <h1>Lista de Usuarios</h1>
//         <button onClick={handleLogout} style={{ backgroundColor: '#dc3545', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
//           Cerrar Sesión
//         </button>
//       </div>

//       <div className="users-list">
//         {users.length > 0 ? (
//           users.map((user) => (
//             <div key={user.id} className="user-card">
//               <h3>{user.name} {user.last_name}</h3>
//               <p><strong>Email:</strong> {user.email}</p>
//               <p><strong>Rol:</strong> {user.role}</p>
//               {/* Aquí puedes agregar más datos si tu backend los devuelve */}
//             </div>
//           ))
//         ) : (
//           <p>No hay usuarios registrados en el sistema.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UsersList;