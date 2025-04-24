import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';


const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className="navbar">
            
                <div className="navbar-start">
                   
                    <div className="dropdown">
                   
                        <div tabIndex={0} role="button" className="lg:hidden">
                        
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                            </svg>
                        </div>
                        
                       
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                          
                            <NavLink className={({isActive}) => isActive ? 'font-bold underline' : ''} to='/'> 
                                <li>Home</li> 
                            </NavLink>
                            <NavLink className={({isActive}) => isActive ? 'font-bold underline' : ''} to='/my-bookings'> 
                                <li>My-Bookings</li> 
                            </NavLink>
                            <NavLink className={({isActive}) => isActive ? 'font-bold underline' : ''} to='/blogs'> 
                                <li>Blogs</li> 
                            </NavLink>
                            <NavLink className={({isActive}) => isActive ? 'font-bold underline' : ''} to='contact-us'> 
                                <li>Contact Us</li> 
                            </NavLink>
                        </ul>
                    </div>
                    
                  
                    <img className='w-8' src={logo} alt="Phudu Logo" />
                    <a className="text-xl">Phudu</a>
                </div>
                
                
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                       
                        <NavLink className={({isActive}) => isActive ? 'font-bold underline' : ''} to='/'> 
                            <li>Home</li> 
                        </NavLink>
                        <NavLink className={({isActive}) => isActive ? 'font-bold underline' : ''} to='/my-bookings'> 
                            <li>My-Bookings</li> 
                        </NavLink>
                        <NavLink className={({isActive}) => isActive ? 'font-bold underline' : ''} to='/blogs'> 
                            <li>Blogs</li> 
                        </NavLink>
                        <NavLink className={({isActive}) => isActive ? 'font-bold underline' : ''} to='contact-us'> 
                            <li>Contact Us</li> 
                        </NavLink>
                    </ul>
                </div>
                
                
                <div className="navbar-end">
                    <button className="btn btn-primary rounded-3xl w-28">Emergency</button>
                </div>
            </div>
        </div>
    );
};


export default Navbar;