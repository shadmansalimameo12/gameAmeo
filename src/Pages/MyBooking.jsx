import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import LoadingSpinner from '../Components/LoadingSpinner';


const MyBooking = () => {

    const [bookedDoctors, setBookedDoctors] = useState([]);
    

    const [loading, setLoading] = useState(true);

   
    useEffect(() => {
        try {
            
            const timer = setTimeout(() => {
               
                const storedBookings = JSON.parse(localStorage.getItem('bookedDoctors')) || [];
                
               
                setBookedDoctors(storedBookings);
                
               
                setLoading(false);
            }, 600);
            
          
            return () => clearTimeout(timer);
        } catch (error) {
            
            console.error("Error loading bookings:", error);
            setLoading(false);
        }
    }, []); 

    
    const handleCancelAppointment = (doctor) => {
      
        const updatedBookings = bookedDoctors.filter(doc => doc.id !== doctor.id);
        
        
        setBookedDoctors(updatedBookings);
        
       
        localStorage.setItem('bookedDoctors', JSON.stringify(updatedBookings));
        
       
        toast.error(`Appointment with ${doctor.name} cancelled!`, {
            position: "top-right",
            autoClose: 3000
        });
    };

    
    const chartData = bookedDoctors.map(doctor => ({
       
        name: doctor.name.split(' ')[1] || doctor.name,
        fee: doctor.consultationFee
    }));

    
    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="my-8">
           
            <h1 className="text-3xl font-bold mb-8 text-center">My Appointments</h1>
            
           
            {bookedDoctors.length === 0 ? (
                
                <div className="text-center py-8">
                    <p className="text-xl text-gray-500">No appointments booked yet.</p>
                    <Link to="/">
                        <button className="btn btn-primary mt-4">Browse Doctors</button>
                    </Link>
                </div>
            ) : (
                
                <>
                   
                    <div className="mb-8 p-4 bg-white rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4 text-center">Consultation Fee Comparison</h2>
                        <div className="h-64 w-full">
                            
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart 
                                    data={chartData}
                                    margin={{ top: 5, right: 30, left: 20, bottom: 25 }}
                                    barSize={20} 
                                >
                                   
                                    <CartesianGrid strokeDasharray="3 3" />
                                    
                                   
                                    <XAxis 
                                        dataKey="name" 
                                        angle={-45}
                                        textAnchor="end"
                                        height={60}
                                        padding={{ left: 30, right: 30 }} 
                                    />
                                    
                                 
                                    <YAxis 
                                        label={{ 
                                            value: 'Fee (Tk)', 
                                            angle: -90, 
                                            position: 'insideLeft' 
                                        }} 
                                    />
                                    
                                 
                                    <Tooltip formatter={(value) => [`${value} Tk`, 'Consultation Fee']} />
                                    
                                
                                    <Bar 
                                        dataKey="fee" 
                                        fill="#8884d8"
                                        radius={[3, 3, 0, 0]} 
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

              
                    <div className="space-y-4">
                
                        {bookedDoctors.map((doctor) => (
                            <div key={doctor.id} className="card bg-base-100 shadow-lg">
                                <div className="card-body flex flex-row items-center">
                               
                                    <div className="avatar mr-4">
                                        <div className="w-16 rounded-full">
                                            <img src={doctor.image} alt={doctor.name} />
                                        </div>
                                    </div>
                                    
                                  
                                    <div className="flex-grow">
                                        <h2 className="card-title">{doctor.name}</h2>
                                        <p className="text-gray-600">{doctor.speciality}</p>
                                        <p className="text-gray-500 text-sm">Available on: {doctor.availability.join(', ')}</p>
                                        <p className="text-gray-500 text-sm">Fee: {doctor.consultationFee} Tk</p>
                                    </div>
                                    
                                 
                                    <div className="flex flex-col gap-2">
                                      
                                        <Link to={`/doctor-details/${doctor.id}`}>
                                            <button className="btn btn-primary btn-sm w-full">View Details</button>
                                        </Link>
                                        
                                      
                                        <button 
                                            className="btn btn-error btn-sm w-full"
                                            onClick={() => handleCancelAppointment(doctor)}
                                        >
                                            Cancel Appointment
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default MyBooking;