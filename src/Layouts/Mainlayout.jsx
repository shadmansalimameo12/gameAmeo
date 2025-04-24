import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const Mainlayout = () => {
    return (
        <div>
    
            <Navbar></Navbar>
            
            
            <div className='w-11/12 mx-auto min-h-[calc(100vh-310px)]'>
              
                <Outlet></Outlet>
            </div>
            
          
            <Footer></Footer>
        </div>
    );
};


export default Mainlayout;