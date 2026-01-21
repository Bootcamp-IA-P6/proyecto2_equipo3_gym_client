import api from './api';

const getAllUsers = async (skip = 0, limit = 100) => {
  const response = await api.get('/users', { params: { skip, limit } });
  return response.data;
};

const getUserById = async (id) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

const createUser = async (userData) => {
  const response = await api.post('/users', userData);
  return response.data;
};

const updateUser = async (id, userData) => {
  const response = await api.put(`/users/${id}`, userData);
  return response.data;
};

const deleteUser = async (id) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};

export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};