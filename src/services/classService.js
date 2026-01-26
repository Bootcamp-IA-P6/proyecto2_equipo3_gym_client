import api from './api';


const getAllClasses = async (skip = 0, limit = 100) => {
  const response = await api.get('/gym-classes/', { params: { skip, limit } });
  return response.data;
};

// 2. Obtener una clase por ID
const getClassById = async (id) => {
  const response = await api.get(`/gym-classes/${id}`);
  return response.data;
};

// 3. Crear una nueva clase
const createClass = async (classData) => {
  // Usamos /gym-classes/ con la barra al final para evitar el 404
  const response = await api.post('/gym-classes/', classData);
  return response.data;
};

// 4. Actualizar una clase
const updateClass = async (id, classData) => {
  const response = await api.put(`/gym-classes/${id}`, classData);
  return response.data;
};

// 5. Eliminar una clase
const deleteClass = async (id) => {
  const response = await api.delete(`/gym-classes/${id}`);
  return response.data;
};

// Exportamos igual que en trainers
const classService = {
  getAllClasses,
  getClassById,
  createClass,
  updateClass,
  deleteClass
};

export default classService;