import React, { useState, useEffect } from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import LoadingSpinner from '../Components/LoadingSpinner';


const ErrorPage = () => {
  
    const error = useRouteError();
    
 
    const [loading, setLoading] = useState(true);
    
  
    useEffect(() => {
      
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);
        
       
        return () => clearTimeout(timer);
    }, []); 
    
   
    if (loading) {
        return <LoadingSpinner />;
    }
    
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
           
            <Navbar></Navbar>
            
           
            <div className="bg-white p-34 rounded-lg shadow-md text-center w-full min-h-[calc(100vh-300px)]">
          
                <h1 className="text-5xl font-bold text-black mb-4">No Doctor Found</h1>
                
           
                <h2 className="text-2xl font-semibold mb-4">No doctor found with this registration number</h2>
                
             
                {error?.status === 404 && (
                    <p className="text-gray-600 mb-6">
                        The doctor you're looking for doesn't exist or has an invalid ID.
                    </p>
                )}
                
               
                {(!error || error?.status !== 404) && (
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