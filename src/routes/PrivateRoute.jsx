import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  // Verificamos si existe el token en el almacenamiento local
  const token = localStorage.getItem('token');
  
  // Si hay token, renderizamos el componente hijo (la página protegida)
  // Si NO hay token, redirigimos al Login
  return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;