import React from 'react';
import { Link } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
    return (
        <div className='p-6'>
            <div className="bg-base-100 shadow-sm rounded-2xl w-96 pb-8">
                <figure className="px-10 pt-10">
                    <img 
                        src={doctor.image}
                        alt={doctor.name}
                        className="rounded-xl"
                    />
                </figure>
                <div className="mx-10">
                    <div className='flex gap-4 pt-4'>
                        <p className='text-[#09982F] bg-[#09982F20] rounded-xl w-24 p-2'>available</p>
                        <p className='text-[#176AE5] bg-[#176AE520] rounded-xl w-24 p-2'>{doctor.experience}</p>
                    </div>
                    <h2 className="card-title p-2">{doctor.name}</h2>
                    <p className='text-left p-2 text-gray-500'>{doctor.education}</p>
                    <div className="my-3 w-full border-t border-dashed border-gray-400"></div>
                    <p className='text-left py-2 text-gray-600 font-semibold'>
                        <span className='text-xl'>®</span> Reg No: {doctor.registrationNumber}
                    </p>
                    <div className="card-actions w-full">
                        <Link to={`/doctor-details/${doctor.id}`} className="w-full">
                            <button className="btn btn-primary w-full">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;
