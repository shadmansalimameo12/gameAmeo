import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';

const MyBooking = () => {
    const [bookedDoctors, setBookedDoctors] = useState([]);

    // Load booked doctors from localStorage on component mount
    useEffect(() => {
        const storedBookings = JSON.parse(localStorage.getItem('bookedDoctors')) || [];
        setBookedDoctors(storedBookings);
    }, []);

    const handleCancelAppointment = (doctor) => {
        // Filter out the canceled doctor
        const updatedBookings = bookedDoctors.filter(doc => doc.id !== doctor.id);
        
        // Update state
        setBookedDoctors(updatedBookings);
        
        // Update localStorage
        localStorage.setItem('bookedDoctors', JSON.stringify(updatedBookings));
        
        // Show toast notification
        toast.error(`Appointment with ${doctor.name} cancelled!`, {
            position: "top-right",
            autoClose: 3000
        });
    };

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            )}
        </div>
    );
};

export default MyBooking;