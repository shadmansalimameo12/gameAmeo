import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoadingSpinner from '../Components/LoadingSpinner';


const DoctorDetails = () => {
    const data = useLoaderData();
    
    
    const { id } = useParams();
    
   
    const navigate = useNavigate();
    
   
    const [isBooked, setIsBooked] = useState(false);
    
   
    const [loading, setLoading] = useState(true);
    
    
    const [singleDoctor, setSingleDoctor] = useState(null);
    
  
    useEffect(() => {
        if (data) {
            try {
               
                const doctor = data.find(doc => doc.id === parseInt(id));
                
              
                if (!doctor) {
                    throw new Error("Doctor not found");
                }
                
               
                setSingleDoctor(doctor);
                
              
                const timer = setTimeout(() => {
                    setLoading(false);
                }, 500);
                
                
                return () => clearTimeout(timer);
            } catch (error) {
                
                navigate('/not-found', { replace: true });
            }
        }
    }, [data, id, navigate]); 
    
   
    useEffect(() => {
        if (singleDoctor) {
           
            const bookedDoctors = JSON.parse(localStorage.getItem('bookedDoctors')) || [];
            
       
            const alreadyBooked = bookedDoctors.some(doctor => doctor.id === singleDoctor.id);
            
            
            setIsBooked(alreadyBooked);
        }
    }, [singleDoctor]); 

    
    const handleBookAppointment = () => {
        
        const bookedDoctors = JSON.parse(localStorage.getItem('bookedDoctors')) || [];
        
 
        bookedDoctors.push(singleDoctor);
        

        localStorage.setItem('bookedDoctors', JSON.stringify(bookedDoctors));

    
        toast.success(`Appointment booked with ${singleDoctor.name}!`, {
            position: "top-right",
            autoClose: 3000
        });

       
        setIsBooked(true);
        
       
        navigate('/my-bookings');
    };

   
    const handleCancelAppointment = () => {
        
        const bookedDoctors = JSON.parse(localStorage.getItem('bookedDoctors')) || [];
        
        
        const updatedBookings = bookedDoctors.filter(doctor => doctor.id !== singleDoctor.id);
        
        
        localStorage.setItem('bookedDoctors', JSON.stringify(updatedBookings));

        
        toast.error(`Appointment with ${singleDoctor.name} cancelled!`, {
            position: "top-right",
            autoClose: 3000
        });

    
        setIsBooked(false);
    };

   
    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div>
         
            <div className='text-center pt-10'>
                <h1 className='text-3xl font-bold'>Doctor's Profile Details</h1>
                <p className='text-gray-500'>
                    Health is not just about what you are eating, it's also about what you are thinking, saying, and doing. <br />
                    A peaceful mind leads to a healthy body.
                </p>
            </div>

          
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

                
                    <div className='flex'>
                        <p className="font-medium">Availability:</p>
                        <ul className="list-disc list-inside text-[#FFA000] flex gap-6 px-2 rounded-2xl bg-[#FFA00020]" >
                           
                            {
                                singleDoctor.availability.map((day, index) => (
                                    <li key={index}>{day}</li>
                                ))
                            }
                        </ul>
                    </div>

                   
                    <p className="mt-4 font-semibold">
                        <span className='pr-2'>Consultation Fee:</span> 
                        <span className='text-blue-600'>{singleDoctor.consultationFee} Tk</span> 
                        <span className='text-gray-500'>(incl. vat)</span> 
                        <span className='text-blue-600'>Per Consultation</span>
                    </p>
                </div>
            </div>

            <div className='w-2/3 mx-auto bg-gray-100 p-6'>
                <h1 className='text-xl font-bold text-center'>Book an Appointment</h1>
                
              
                <div className="my-3 w-full border-t border-dashed border-gray-400"></div>
                
              
                <div className='flex justify-between'>
                    <h1 className='font-semibold p-2'>Availability</h1>
                    <p className='text-[#09982F] bg-[#09982F20] rounded-2xl p-2'>Doctor Available Today</p>
                </div>
                
              
                <div className="my-3 w-full border-t border-dashed border-gray-400"></div>
                
                
                <p className='text-[#FFA000] bg-[#FFA00020] rounded-3xl p-1'>
                    ! Due to high patient volume, we are currently accepting appointments for today only. 
                    We appreciate your understanding and cooperation.
                </p>

               
                <div className="mt-4 w-full">
                 
                    {!isBooked ? (
                        
                        <button 
                            className="btn btn-primary w-full"
                            onClick={handleBookAppointment}
                        >
                            Book Appointment Now
                        </button>
                    ) : (
                        
                        <button 
                            className="btn btn-error w-full"
                            onClick={handleCancelAppointment}
                        >
                            Cancel Appointment Now
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;