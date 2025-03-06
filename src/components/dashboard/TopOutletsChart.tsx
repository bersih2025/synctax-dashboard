
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Outlet A', tax: 4000 },
  { name: 'Outlet B', tax: 3500 },
  { name: 'Outlet C', tax: 3000 },
  { name: 'Outlet D', tax: 2800 },
  { name: 'Outlet E', tax: 2500 },
  { name: 'Outlet F', tax: 2300 },
  { name: 'Outlet G', tax: 2000 },
  { name: 'Outlet H', tax: 1800 },
  { name: 'Outlet I', tax: 1500 },
  { name: 'Outlet J', tax: 1000 },
];

const TopOutletsChart = () => {
  return (
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Bar dataKey="tax" fill="#6366F1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopOutletsChart;
