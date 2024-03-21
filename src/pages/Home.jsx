import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='bg-red-600'>This is a home page </h2>
        </div>
    );
};

export default Home;