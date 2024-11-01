import React from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface ChartProps {
  data: any[];
  dataKey: string;
  chartType: 'bar' | 'line';
  color: string;
}

const CustomChart: React.FC<ChartProps> = ({
  data,
  dataKey,
  chartType,
  color,
}) => {
  return (
    <ResponsiveContainer width="45%" height={400}>
      {chartType === 'bar' ? (
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="createdAt"
            tickFormatter={(tick) => new Date(tick).toLocaleTimeString()}
          />
          <YAxis />
          <Tooltip
            labelFormatter={(label) => new Date(label).toLocaleString()}
          />
          <Legend />
          <Bar dataKey={dataKey} fill={color} />
        </BarChart>
      ) : (
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="createdAt"
            tickFormatter={(tick) => new Date(tick).toLocaleTimeString()}
          />
          <YAxis />
          <Tooltip
            labelFormatter={(label) => new Date(label).toLocaleString()}
          />
          <Legend />
          <Line type="monotone" dataKey={dataKey} stroke={color} />
        </LineChart>
      )}
    </ResponsiveContainer>
  );
};

export default CustomChart;
