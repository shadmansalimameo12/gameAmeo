import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full">
                <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
                <h2 className="text-2xl font-semibold mb-4">Oops! Page Not Found</h2>
                
                {error?.status === 404 && error.data.includes("Doctor") && (
                    <p className="text-gray-600 mb-6">
                        The doctor you're looking for doesn't exist or has an invalid ID.
                    </p>
                )}
                
                {(!error || !error.data?.includes("Doctor")) && (
                    <p className="text-gray-600 mb-6">
                        The page you are looking for might have been removed or is temporarily unavailable.
                    </p>
                )}
                
                <Link to="/">
                    <button className="btn btn-primary">
                        View All Doctors
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;