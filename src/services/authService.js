import api from './api';

const login = async (email, password) => {
  const response = await api.post('/auth/login', { email, password });
  if (response.data.access_token) {
    localStorage.setItem('token', response.data.access_token);
    // Guarda el rol si tu backend lo devuelve
    if (response.data.role) {
       localStorage.setItem('role', response.data.role); 
    }
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
  window.location.href = '/login'; 
};

// TODO: Implementar endpoint /me en Backend para validar sesión al recargar página
/* const getCurrentUser = async () => {
  const response = await api.get('/auth/me'); 
  return response.data;
};
*/

export default {
  login,
  logout,
  // getCurrentUser, // Descomentar cuando exista el endpoint
};