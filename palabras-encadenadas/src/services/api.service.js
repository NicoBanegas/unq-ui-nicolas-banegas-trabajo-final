import axios from 'axios';

const API_URL = 'https://word-api-hmlg.vercel.app';

export const validarPalabra = async (word) => {
  try {
    const response = await axios.get(`${API_URL}/api/validate`, {
      params: { word }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching word validation:', error);
    throw error;
  }
};

