import React from 'react';
import { Link } from 'react-router';

const DoctorCard = ({doctor}) => {
    return (
        <div>
            <div className=" bg-base-100 shadow-sm">
                <figure className="px-10 pt-10">
                    <img 
                        src={doctor.image}
                        alt="Shoes"
                        className="rounded-xl     " />
                </figure>
                <div className="mx-10 ">
                    <div className='flex gap-4 pt-2'>
                        <p className='text-[#09982F] bg-[#09982F20] rounded-xl w-24 p-2'>available</p>
                        <p className='text-[#176AE5] bg-[#176AE520] rounded-xl w-24 p-2'>{doctor.experience}</p>
                    </div>
                    <h2 className="card-title">{doctor.name}</h2>
                    <p className='text-left'>{doctor.education}</p>
                    <p className='text-left'>Reg No:  {doctor.registrationNumber}</p>
                    <div className="card-actions flex mx-auto">
                        <Link to={`/doctor-details/${doctor.id}`}><button className="btn btn-primary w-full">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;