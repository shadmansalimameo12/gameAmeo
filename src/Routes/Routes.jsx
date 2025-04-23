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
        Component: Mainlayout,
        errorElement: ErrorPage,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
                loader: () => fetch('../doctors.json')
            },
            {
                path: '/my-bookings',
                Component : MyBooking,
            },
            {
                path: '/doctor-details/:id',
                Component: DoctorDetails,
                loader: () => fetch('../doctors.json')
            },
            {
                path: '/contact-us',
                Component: ContactUs,
            },
            {
                path: '/blogs',
                Component:  Blogs
            }

        ]
    }

]);