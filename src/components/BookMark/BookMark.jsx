import React, { useEffect, useState } from 'react';
import { getDataFromLocal } from '../../utilities/LocalStorage';
import Bookmarks from '../../pages/Bookmarks';

const BookMark = () => {
const [getData, setGateData] = useState([]);
console.log(getData)
useEffect(() => {
    const data = getDataFromLocal();
    setGateData(data)
}, [])

    return (
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 mt-6 gap-6'> 
            {
                getData.map((BlogDa, idx) => <Bookmarks key={idx} BlogDa={BlogDa} ></Bookmarks>)
            }
        </div>
    );
};

export default BookMark;