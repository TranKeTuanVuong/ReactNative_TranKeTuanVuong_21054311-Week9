// api/usersApi.js
import axios from 'axios';

// API URL
const API_URL = 'https://66faa7eaafc569e13a9caa55.mockapi.io/dulieu';

// Fetch all users
export const fetchUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Create a new user
export const createUser = async (userData) => {
  const response = await axios.post(API_URL, userData);
  return response.data;
};

// Update an existing user
export const updateUser = async (userId, userData) => {
  const response = await axios.put(`${API_URL}/${userId}`, userData);
  return response.data;
};

// Delete a user
export const deleteUser = async (userId) => {
  await axios.delete(`${API_URL}/${userId}`);
};
