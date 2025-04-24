import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Mainlayout from "../Layouts/Mainlayout";
import MyBooking from "../Pages/MyBooking";
import DoctorDetails from "../Pages/DoctorDetails";
import ContactUs from "../Pages/ContactUs";
import Blogs from "../Pages/Blogs";
import ErrorPage from "../Pages/ErrorPage";


export const router = createBrowserRouter([
    {
        path: "/", 
        element: <Mainlayout />, 
        errorElement: <ErrorPage />, 
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => fetch('../doctors.json') 
            },
            {
                path: '/my-bookings',
                element: <MyBooking />,
            },
            {
                path: '/doctor-details/:id', 
                element: <DoctorDetails />,
                loader: async ({ params }) => {
                    try {
                        
                        const data = await fetch('../doctors.json').then(res => res.json());
                        
                        
                        if (!/^\d+$/.test(params.id)) {
                            throw new Response("Invalid doctor ID format", { status: 404 });
                        }

                        
                        const doctorId = parseInt(params.id);
                        const doctor = data.find(doc => doc.id === doctorId);
                        
                      
                        if (!doctor) {
                            throw new Response("Doctor not found", { status: 404 });
                        }
                        
                     
                        return data;
                    } catch (error) {
                       
                        throw new Response("Doctor not found", { status: 404 });
                    }
                }
            },
            {
                path: '/contact-us',
                element: <ContactUs />,
            },
            {
                path: '/blogs',
                element: <Blogs />
            }
        ]
    }
]);