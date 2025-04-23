import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const TriangleFeeChart = ({ doctors }) => {
  // If no doctors are provided, return empty array
  if (!doctors || doctors.length === 0) {
    return (
      <div className="text-center py-4">
        <p className="text-gray-500">No appointment data to display</p>
      </div>
    );
  }

  // Sort doctors by fee to create a rising and falling pattern (triangle-like)
  // First half ascending, second half descending
  const sortedDoctors = [...doctors].sort((a, b) => a.consultationFee - b.consultationFee);
  const midPoint = Math.ceil(sortedDoctors.length / 2);
  const firstHalf = sortedDoctors.slice(0, midPoint);
  const secondHalf = [...sortedDoctors.slice(midPoint)].reverse();
  
  const arrangedDoctors = [...firstHalf, ...secondHalf];
  
  // Prepare data for the chart
  const chartData = arrangedDoctors.map((doctor) => ({
    name: doctor.name.split(' ')[1], // Using last name for brevity
    fee: doctor.consultationFee,
    fullName: doctor.name // For tooltip
  }));

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-bold text-center mb-4">Appointment Fees Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            angle={-45}
            textAnchor="end"
            height={60}
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            label={{ value: 'Fee (Tk)', angle: -90, position: 'insideLeft', offset: -10 }}
          />
          <Tooltip 
            formatter={(value) => [`${value} Tk`, 'Consultation Fee']}
            labelFormatter={(label, items) => items[0].payload.fullName}
          />
          <Area 
            type="monotone" 
            dataKey="fee" 
            stroke="#2563eb" 
            fill="#2563eb" 
            fillOpacity={0.3} 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TriangleFeeChart;