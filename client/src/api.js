mport axios from 'axios';

const API_BASE = process.env.NODE_ENV === 'production' ? 'https://campaign-tracker-3l0z.onrender.com/api' : '/api';

const api = axios.create({
  baseURL: API_BASE,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const CAMPAIGNS_BASE = `${API_BASE}/campaigns`; // eslint-disable-line no-unused-vars

export const register = async (name, password) => {
  const response = await api.post('/auth/register', { name, password });
  return response.data;
};

export const login = async (name, password) => {
  const response = await api.post('/auth/login', { name, password });
  return response.data;
};

export const getCampaigns = async () => {
  const response = await api.get('/campaigns');
  return response.data;
};

export const createCampaign = async (campaign) => {
  const response = await api.post('/campaigns', campaign);
  return response.data;
};

export const updateCampaign = async (id, campaign) => {
  const response = await api.put(`/campaigns/${id}`, campaign);
  return response.data;
};

export const deleteCampaign = async (id) => {
  const response = await api.delete(`/campaigns/${id}`);
  return response.data;
};

