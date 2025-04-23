import React, { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard';

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
        <div className='text-center py-4 bg-gray-100 shadow-md rounded-2xl my-4'>
             <h1 className='text-3xl font-bold py-4 '>Our Best Doctors</h1>
             <p className='text-[#0F0F0F80] py-4'>Our platform connects you with verified, experienced doctors across various specialties — all at your <br /> convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.ou can trust.</p>
        
           
           
           
           
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                
           {

            displayDoctors.map(doctor => <DoctorCard key={doctor.id} doctor={doctor} ></DoctorCard>)
           }




            </div>
            <button onClick={() => {
                setShowAll(prv => !prv)
                if(showAll) window.scrollTo(0,200)
            }
            } className="btn btn-primary rounded-3xl w-42 py-6 mt-4 ">
                {showAll? 'View Less Doctors' : 'View All Doctors'}</button>
        
        </div>
        
    );
};

export default ContentContainer;