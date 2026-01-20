import api from './api';

const getAllTrainers = async () => {
  const response = await api.get('/trainers');
  return response.data;
};

const getTrainerById = async (id) => {
  const response = await api.get(`/trainers/${id}`);
  return response.data;
};

const createTrainer = async (trainerData) => {
  // trainerData suele requerir user_id y otros datos específicos
  const response = await api.post('/trainers', trainerData);
  return response.data;
};

const updateTrainer = async (id, trainerData) => {
  const response = await api.put(`/trainers/${id}`, trainerData);
  return response.data;
};

const deleteTrainer = async (id) => {
  const response = await api.delete(`/trainers/${id}`);
  return response.data;
};

export default {
  getAllTrainers,
  getTrainerById,
  createTrainer,
  updateTrainer,
  deleteTrainer
};