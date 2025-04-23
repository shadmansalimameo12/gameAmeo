import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import LoadingSpinner from '../Components/LoadingSpinner';

const DoctorDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const navigate = useNavigate();
    const [isBooked, setIsBooked] = useState(false);
    const [loading, setLoading] = useState(true);
    const [singleDoctor, setSingleDoctor] = useState(null);
    
    // Find the doctor and set loading state
    useEffect(() => {
        if (data) {
            const doctor = data.find(doc => doc.id === parseInt(id));
            setSingleDoctor(doctor);
            setLoading(false);
        }
    }, [data, id]);
    
    // Check if doctor is already booked
    useEffect(() => {
        if (singleDoctor) {
            const bookedDoctors = JSON.parse(localStorage.getItem('bookedDoctors')) || [];
            const alreadyBooked = bookedDoctors.some(doctor => doctor.id === singleDoctor.id);
            setIsBooked(alreadyBooked);
        }
    }, [singleDoctor]);

    const handleBookAppointment = () => {
        // Get existing booked doctors from localStorage
        const bookedDoctors = JSON.parse(localStorage.getItem('bookedDoctors')) || [];
        
        // Add the current doctor to the list
        bookedDoctors.push(singleDoctor);
        
        // Save back to localStorage
        localStorage.setItem('bookedDoctors', JSON.stringify(bookedDoctors));
        
        // Show success toast
        toast.success(`Appointment booked with ${singleDoctor.name}!`, {
            position: "top-right",
            autoClose: 3000
        });
        
        // Update booking status
        setIsBooked(true);
        
        // Navigate to bookings page
        navigate('/my-bookings');
    };

    const handleCancelAppointment = () => {
        // Get existing booked doctors from localStorage
        const bookedDoctors = JSON.parse(localStorage.getItem('bookedDoctors')) || [];
        
        // Remove the current doctor from the list
        const updatedBookings = bookedDoctors.filter(doctor => doctor.id !== singleDoctor.id);
        
        // Save back to localStorage
        localStorage.setItem('bookedDoctors', JSON.stringify(updatedBookings));
        
        // Show cancel toast
        toast.error(`Appointment with ${singleDoctor.name} cancelled!`, {
            position: "top-right",
            autoClose: 3000
        });
        
        // Update booking status
        setIsBooked(false);
    };

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="card card-side bg-base-100 shadow-sm w-2/3 mx-auto p-10 my-8">
            <figure>
                <img className='w-96' src={singleDoctor.image} alt="Doctor" />
            </figure>
            <div className="ml-6">
                <h2 className="card-title text-2xl font-bold mb-2">{singleDoctor.name}</h2>
                <p className="text-gray-700">{singleDoctor.education}</p>
                <p className="text-gray-700 font-semibold mt-2">Speciality: {singleDoctor.speciality}</p>
                <p className="text-gray-700 mt-2">Working At: <span className="font-medium">{singleDoctor.workplace}</span></p>

                <div className="my-3 w-full border-t border-dashed border-gray-400"></div>

                <p className="text-gray-600">Reg No: {singleDoctor.registrationNumber}</p>

                <div className="my-3 w-full border-t border-dashed border-gray-400"></div>

                <div>
                    <p className="font-medium">Availability:</p>
                    <ul className="list-disc list-inside text-gray-600">
                        {
                            singleDoctor.availability.map((day, index) => (
                                <li key={index}>{day}</li>
                            ))
                        }
                    </ul>
                </div>

                <p className="mt-4 font-semibold text-blue-600">Consultation Fee: {singleDoctor.consultationFee} Tk (including vat) Per Consultation</p>

                <div className="card-actions justify-end mt-4">
                    {!isBooked ? (
                        <button 
                            className="btn btn-primary"
                            onClick={handleBookAppointment}
                        >
                            Book Appointment
                        </button>
                    ) : (
                        <button 
                            className="btn btn-error"
                            onClick={handleCancelAppointment}
                        >
                            Cancel Appointment
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;