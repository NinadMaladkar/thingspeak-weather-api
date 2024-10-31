import axios from 'axios';

const API_URL = process.env.API_URL || '';

export const fetchWeatherData = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: 'Basic ' + btoa('admin:password'),
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
