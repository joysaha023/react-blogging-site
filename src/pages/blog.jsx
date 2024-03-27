import React from 'react';
import { useLoaderData } from 'react-router-dom';

const blog = () => {
    const blog = useLoaderData

    return (
        <div>
            <h2>single blog</h2>
        </div>
    );
};

export default blog;