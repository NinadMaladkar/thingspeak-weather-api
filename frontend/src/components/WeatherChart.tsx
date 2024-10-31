import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchWeatherData } from '../services/weatherService';

const WeatherChart: React.FC = () => {
  const { data: weatherData, error, isLoading } = useQuery({
    queryKey: ['weatherData'],
    queryFn: fetchWeatherData,
    refetchInterval: 60000, // Refetch data every minute
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching weather data: {error.message}</div>;
  }

  return (
    <div>
      <h1>Weather Data Chart</h1>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={weatherData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="createdAt" tickFormatter={(tick) => new Date(tick).toLocaleTimeString()} />
          <YAxis />
          <Tooltip labelFormatter={(label) => new Date(label).toLocaleString()} />
          <Legend />
          <Line type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherChart;
