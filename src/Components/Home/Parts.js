import React, { useEffect, useState } from 'react';
import Card from './Card';

const Parts = () => {


    const [tools, setTools] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/parts', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setTools(data))


    }, [])




    return (
        <div>
            <h2 className='mt-5 mb-5 text-3xl bg-red-900 p-20 text-white'>Welcome to Menufacturerr House</h2>

            <div className='grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-5'>
                {
                    tools.map(tool => <Card
                        tool={tool}
                        key={tool._id}
                    ></Card>)
                }
            </div>

        </div>
    );
};

export default Parts;