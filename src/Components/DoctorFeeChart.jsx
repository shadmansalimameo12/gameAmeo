import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DoctorFeeChart = ({ bookedDoctors }) => {
  // If no doctors are booked, show a placeholder message
  if (!bookedDoctors || bookedDoctors.length === 0) {
    return (
      <div className="bg-base-100 shadow-lg p-6 rounded-lg my-6">
        <h2 className="text-xl font-bold mb-4 text-center">Consultation Fee Chart</h2>
        <div className="text-center py-10 text-gray-500">
          Book doctors to see their consultation fees compared here
        </div>
      </div>
    );
  }

  // Prepare data for the chart
  const chartData = bookedDoctors.map(doctor => ({
    name: doctor.name.replace('Dr. ', ''),
    fee: doctor.consultationFee,
    speciality: doctor.speciality
  }));

  return (
    <div className="bg-base-100 shadow-lg p-6 rounded-lg my-6">
      <h2 className="text-xl font-bold mb-4 text-center">Consultation Fee Comparison</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 70
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            angle={-45} 
            textAnchor="end"
            height={40}
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            label={{ value: 'Consultation Fee ', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
        
            labelFormatter={(value) => `Dr. ${value}`}
            contentStyle={{ backgroundColor: '#f3f4f6', borderRadius: '0.5rem' }}
          />
          <Legend />
          <Bar 
            dataKey="fee" 
            
            name="Consultation Fee" 
            fill="#4f46e5" 
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DoctorFeeChart;