import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchWeatherData } from '../services/weatherService';
import CustomChart from './CustomChart';
import './WeatherChart.css';
const WeatherChart: React.FC = () => {
  const {
    data: weatherData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['weatherData'],
    queryFn: fetchWeatherData,
    refetchInterval: 60000,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching weather data: {error.message}</div>;
  }

  const timeSortedWeatherData = weatherData.sort(
    (a: any, b: any) =>
      new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
  );

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '2%' }}>
        Weather Data Chart
      </h1>
      <div className="chart-container">
        <CustomChart
          data={timeSortedWeatherData}
          dataKey="temperature"
          color="#8884d8"
        />
        <CustomChart
          data={timeSortedWeatherData}
          dataKey="humidity"
          color="#82ca9d"
        />
        <CustomChart
          data={timeSortedWeatherData}
          dataKey="pressure"
          color="#eaa780"
        />
        <CustomChart
          data={timeSortedWeatherData}
          dataKey="powerLevel"
          color="#4d88ef"
        />
        <CustomChart
          data={timeSortedWeatherData}
          dataKey="windSpeed"
          color="#4d88ef"
        />
        <CustomChart
          data={timeSortedWeatherData}
          dataKey="precipitation"
          color="#73cff7"
        />
        <CustomChart
          data={timeSortedWeatherData}
          dataKey="windDirection"
          color="#f591ee"
        />
        <CustomChart
          data={timeSortedWeatherData}
          dataKey="uv"
          color="#edd117"
        />
      </div>
    </div>
  );
};

export default WeatherChart;
