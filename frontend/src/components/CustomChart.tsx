import React from 'react';
import {
  BarChart,
  Bar,
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
  color: string;
}

const CustomChart: React.FC<ChartProps> = ({ data, dataKey, color }) => {
  return (
    <ResponsiveContainer width="45%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="createdAt"
          tickFormatter={(tick) => new Date(tick).toLocaleTimeString()}
        />
        <YAxis />
        <Tooltip labelFormatter={(label) => new Date(label).toLocaleString()} />
        <Legend />
        <Bar dataKey={dataKey} fill={color} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomChart;
