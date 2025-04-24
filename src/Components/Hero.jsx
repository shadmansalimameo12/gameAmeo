import React from 'react';
import Bannerimg from '../assets/banner-img-1.png'
import Bannerimg2 from '../assets/21.avif'

const Hero = () => {
    return (
        <div className=' text-center py-4 bg-gray-100 shadow-md rounded-2xl my-4  '>
            <h1 className='text-3xl font-bold py-4 '>Dependable Care, Backed by Trusted <br />    Professionals.</h1>
            <p className='text-[#0F0F0F80] py-4'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent     consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div>
                <input className='shadow-md bg-white border-gray-300 rounded-3xl w-1/3 h-12 px-4 mb-3 focus:outline-none focus:shadow-outline py-4 my-4 md:mr-2 md:mb-0' type="text " placeholder='search any-doctor' />
                <button className="btn btn-primary rounded-3xl w-28   ">search now</button>
            </div>
            <div className=' gap-4  flex justify-center py-6  ' >
                <img className='object-cover rounded-2xl' src={Bannerimg} alt="" />
                <img className='w-[32%] rounded-2xl' src={Bannerimg2} alt="" />
            </div>







        </div>

    );
};

export default Hero;