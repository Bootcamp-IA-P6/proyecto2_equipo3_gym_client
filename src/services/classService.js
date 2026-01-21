import api from './api';


const BASE_URL = '/gym-classes'; 

const getAllClasses = async (skip = 0, limit = 100) => {
  const response = await api.get(`${BASE_URL}/`, { params: { skip, limit } });
  return response.data;
};

const getClassById = async (id) => {
  const response = await api.get(`${BASE_URL}/${id}`);
  return response.data;
};

const createClass = async (classData) => {
  const response = await api.post(BASE_URL, classData);
  return response.data;
};

const updateClass = async (id, classData) => {
  const response = await api.put(`${BASE_URL}/${id}`, classData);
  return response.data;
};

const deleteClass = async (id) => {
  const response = await api.delete(`${BASE_URL}/${id}`);
  return response.data;
};

export default {
  getAllClasses,
  getClassById,
  createClass,
  updateClass,
  deleteClass
};