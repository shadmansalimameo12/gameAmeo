import React from 'react';
import err from '../assets/404.jpg'

const ContactUs = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="text-center max-w-md">
                <img src={err} alt="" />
                <h1 className="text-9xl font-bold text-red-800">404</h1>
                <h2 className="text-2xl font-semibold text-gray-700 mt-4">Page Not Found</h2>
                <p className="text-gray-600 mt-2">The page you are looking for doesn't exist or has been moved.</p>
                <button 
                    onClick={() => window.history.back()} 
                    className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default ContactUs;