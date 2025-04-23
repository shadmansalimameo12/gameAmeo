import { createBrowserRouter } from "react-router";
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
        errorElement: <ErrorPage />, // This should be completely separate from Mainlayout
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
                    const data = await fetch('../doctors.json').then(res => res.json())
                    const doctor = data.find(doc => doc.id === parseInt(params.id))
                    
                    // Throw error if doctor not found
                    if (!doctor) {
                        throw new Response("Doctor not found", { status: 404 })
                    }
                    
                    return data
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