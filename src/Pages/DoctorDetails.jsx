import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const DoctorDetails = () => {
    const data = useLoaderData()
    const {id} = useParams()
    const singleDoctor = data.find(doc => doc.id === parseInt(id))
    console.log(data,id,singleDoctor);
    return (
        <div className="card card-side bg-base-100 shadow-sm w-2/3 mx-auto p-10 ">
  <figure>
    <img className='w-96' src={singleDoctor.image} alt="Doctor" />
  </figure>
  <div className="ml-6">
    <h2 className="card-title text-2xl font-bold mb-2">{singleDoctor.name}</h2>
    <p className="text-gray-700">{singleDoctor.education}</p>
    <p className="text-gray-700 font-semibold mt-2">Speciality: {singleDoctor.speciality}</p>
    <p className="text-gray-700 mt-2">Working At: <span className="font-medium">{singleDoctor.workplace}</span></p>

    <div className="my-3 w-full border-t border-dashed border-gray-400"></div>

    <p className="text-gray-600">Reg No : {singleDoctor.registrationNumber}</p>

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
      <button className="btn btn-primary">Book Appointment</button>
    </div>
  </div>
</div>

    );
};

export default DoctorDetails;