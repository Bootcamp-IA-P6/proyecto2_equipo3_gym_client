import api from './api';


const BASE_URL = '/user_class'; 

const getAllUserClasses = async () => {
    // Esta es la ruta que devuelve quién está en qué clase
    const response = await api.get(BASE_URL);
    return response.data;
};

// Inscribir a un usuario en una clase
const enrollUser = async (enrollmentData) => {
  // enrollmentData espera: { user_id: 1, gym_class_id: 5 }
  const response = await api.post(BASE_URL, enrollmentData);
  return response.data;
};

// Ver todas las inscripciones
const getAllEnrollments = async (skip = 0, limit = 100) => {
  const response = await api.get(`${BASE_URL}/`, { params: { skip, limit } });
  return response.data;
};

// Cancelar inscripción por ID
const cancelEnrollment = async (id) => {
  const response = await api.delete(`${BASE_URL}/${id}`);
  return response.data;
};

export default {
  enrollUser,
  getAllEnrollments,
  cancelEnrollment,
  getAllUserClasses
};