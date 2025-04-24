import React from 'react';
import { FaFacebook } from "react-icons/fa";
import logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div className=''>
    
      <footer className="footer footer-horizontal footer-center text-primary-content p-10">
       
        <aside>
         
          <div className='flex'>
            <img className='w-8' src={logo} alt="Phudu Logo" />
            <a className="text-xl text-black">Phudu</a>
          </div>

       
          <div className="navbar-center hidden lg:flex text-black">
            <ul className="menu menu-horizontal px-1 gap-4">
          
              <NavLink className={({ isActive }) => isActive ? 'font-bold underline' : ''} to='/'> 
                <li>Home</li> 
              </NavLink>
              <NavLink className={({ isActive }) => isActive ? 'font-bold underline' : ''} to='/my-bookings'> 
                <li>My-Bookings</li> 
              </NavLink>
              <NavLink className={({ isActive }) => isActive ? 'font-bold underline' : ''} to='/blogs'> 
                <li>Blogs</li> 
              </NavLink>
              <NavLink className={({ isActive }) => isActive ? 'font-bold underline' : ''} to='contact-us'> 
                <li>Contact Us</li> 
              </NavLink>
            </ul>
          </div>
        </aside>
        
     
        <nav>
          <div className="grid grid-flow-col gap-4 text-black">
            
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={25} />
            </a>
          
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter size={25} />
            </a>
            
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={25} />
            </a>
            
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={25} />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};


export default Footer;