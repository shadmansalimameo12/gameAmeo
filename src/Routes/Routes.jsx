import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Mainlayout from "../Layouts/Mainlayout";
import MyBooking from "../Pages/MyBooking";
import DoctorDetails from "../Pages/DoctorDetails";
import ContactUs from "../Pages/ContactUs";
import Blogs from "../Pages/Blogs";
import ErrorPage from "../Pages/ErrorPage";
import LoadingSpinner from "../Components/LoadingSpinner";

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
                
                loader: async () => {
                    const response = await fetch('../doctors.json');
                    const data = await response.json();
                    return data;
                },
                loading: LoadingSpinner,
                errorElement: <ErrorPage></ErrorPage>,
            },
            {
                path: '/my-bookings',
                Component: MyBooking,
            },
            {
                path: '/doctor-details/:id',
                Component: DoctorDetails,
                loader: async () => {
                    const response = await fetch('../doctors.json');
                    const data = await response.json();
                    return data;
                },
                loading: LoadingSpinner
            },
            {
                path: '/contact-us',
                Component: ContactUs,
            },
            {
                path: '/blogs',
                Component: Blogs
            }
        ]
    }
]);