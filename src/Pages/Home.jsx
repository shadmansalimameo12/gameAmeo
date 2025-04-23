import React from 'react';
import Hero from '../Components/Hero';
import ContentContainer from '../Components/ContentContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <Hero></Hero>
            <ContentContainer doctors = {data} ></ContentContainer>
            
        </div>
    );
};

export default Home;