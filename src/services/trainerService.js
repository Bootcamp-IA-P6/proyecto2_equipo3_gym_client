import api from './api';

const getAllTrainers = async (skip = 0, limit = 100) => {
  const response = await api.get('/trainers', { params: { skip, limit } });
  return response.data;
};

const getTrainerById = async (id) => {
  const response = await api.get(`/trainers/${id}`);
  return response.data;
};
const getTrainersBySpecialty = async (specialty) => {
  const response = await api.get(`/trainers/specialty/${specialty}`);
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
const setTrainerActiveStatus = async (id, isActive) => {
  // Según tu backend: PATCH /trainers/{id}/active?is_active=true
  const response = await api.patch(`/trainers/${id}/active`, null, {
    params: { is_active: isActive }
  });
  return response.data;
};

const trainerService = {
  getAllTrainers,
  getTrainerById,
  getTrainersBySpecialty,
  createTrainer,
  updateTrainer,
  deleteTrainer,
  setTrainerActiveStatus
};

export default trainerService;