import React, { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard';
import CountUp from 'react-countup';
import doctor from '../assets/success-doctor.png';
import patient from '../assets/success-patients.png';
import review from '../assets/success-review.png';
import staffs from '../assets/success-staffs.png';


const ContentContainer = ({doctors}) => {
    const [displayDoctors, setDisplayDoctors] = useState([])
    const [showAll, setShowAll] = useState(false)
    
    useEffect(() => {
        if(showAll){
            setDisplayDoctors(doctors)
        }
        else{
            setDisplayDoctors(doctors.slice(0,6))
        }
    }, [showAll,doctors])
    
    return (
        <div className='text-center py-4 bg-gray-100 shadow-md rounded-2xl my-4  '>
            <h1 className='text-3xl font-bold py-4'>Our Best Doctors</h1>
            <p className='text-[#0F0F0F80] py-4'>Our platform connects you with verified, experienced doctors across various specialties — all at your <br /> convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto md:pl-28 '>
                {displayDoctors.map(doctor => <DoctorCard key={doctor.id} doctor={doctor}></DoctorCard>)}
            </div>
            
            <button 
                onClick={() => {
                    setShowAll(prv => !prv)
                    if(showAll) window.scrollTo(0,200)
                }} 
                className="btn btn-primary rounded-3xl w-42 py-6 mt-4"
            >
                {showAll? 'View Less Doctors' : 'View All Doctors'}
            </button>
            
            {/* Medical services stats section */}
            <div className='mt-12 bg-white p-6 rounded-lg shadow-sm'>
                <h2 className='text-2xl font-bold mb-2'>We Provide Best Medical Services</h2>
                <p className='text-gray-600 mb-8'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
                    {/* Total Doctors */}
                    <div className='bg-gray-50 p-4 rounded-md'>
                        <img 
                            src={doctor}
                            alt="Doctors Icon" 
                            className="h-12 w-12 mx-auto mb-3"
                        />
                        <div className='text-4xl font-bold text-gray-900'>
                            <CountUp 
                                end={199} 
                                duration={2.5} 
                                suffix="+"
                                enableScrollSpy
                                scrollSpyDelay={200}
                            />
                        </div>
                        <div className='text-sm mt-2 text-gray-700'>Total Doctors</div>
                    </div>
                    
                    {/* Total Reviews */}
                    <div className='bg-gray-50 p-4 rounded-md'>
                        <img 
                            src={review}
                            alt="Reviews Icon" 
                            className="h-12 w-12 mx-auto mb-3"
                        />
                        <div className='text-4xl font-bold text-gray-900'>
                            <CountUp 
                                end={467} 
                                duration={2.5} 
                                suffix="+"
                                enableScrollSpy
                                scrollSpyDelay={200}
                            />
                        </div>
                        <div className='text-sm mt-2 text-gray-700'>Total Reviews</div>
                    </div>
                    
                    {/* Patients */}
                    <div className='bg-gray-50 p-4 rounded-md'>
                        <img 
                            src={patient} 
                            alt="Patients Icon" 
                            className="h-12 w-12 mx-auto mb-3"
                        />
                        <div className='text-4xl font-bold text-gray-900'>
                            <CountUp 
                                end={1900} 
                                duration={2.5} 
                                suffix="+"
                                enableScrollSpy
                                scrollSpyDelay={200}
                            />
                        </div>
                        <div className='text-sm mt-2 text-gray-700'>Patients</div>
                    </div>
                    
                    {/* Total Stuffs */}
                    <div className='bg-gray-50 p-4 rounded-md'>
                        <img 
                            src={staffs}
                            alt="Staff Icon" 
                            className="h-12 w-12 mx-auto mb-3"
                        />
                        <div className='text-4xl font-bold text-gray-900'>
                            <CountUp 
                                end={300} 
                                duration={2.5} 
                                suffix="+"
                                enableScrollSpy
                                scrollSpyDelay={200}
                            />
                        </div>
                        <div className='text-sm mt-2 text-gray-700'>Total Stuffs</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentContainer;