import axios from 'axios';
import { WeatherData } from '../types/Weather';

const API_URL = process.env.REACT_APP_API_URL || '';

export const fetchWeatherData = async () => {
  try {
    const response = await axios.get<WeatherData[]>(API_URL, {
      headers: {
        Authorization:
          'Basic ' +
          btoa(
            process.env.REACT_APP_API_USERNAME +
              ':' +
              process.env.REACT_APP_API_PASSWORD,
          ),
      },
    });
    if (response.status !== 200) {
      throw new Error('Failed to fetch weather data');
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
