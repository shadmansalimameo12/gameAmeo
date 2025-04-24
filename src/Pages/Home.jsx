import React, { useState, useEffect } from 'react';
import Hero from '../Components/Hero';
import ContentContainer from '../Components/ContentContainer';
import { useLoaderData } from 'react-router';
import LoadingSpinner from '../Components/LoadingSpinner';

const Home = () => {
    const data = useLoaderData();
    const [loading, setLoading] = useState(true);

    
    
    useEffect(() => {
        // Simulate checking if data is loaded
        if (data) {
            setLoading(false);
        }
    }, [data]);
    
    if (loading) {
        return <LoadingSpinner />;
    }
    
    return (
        <div>
            <Hero></Hero>
            <ContentContainer doctors={data}></ContentContainer>
        </div>
    );
};

export default Home;