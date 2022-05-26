import React, { useEffect, useState } from 'react';
import Card from './Card';

const Parts = () => {


    const [tools, setTools] = useState([])

    useEffect(() => {
        fetch("https://gentle-headland-20307.herokuapp.com/parts", {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setTools(data))


    }, [])

    return (
        <div className='bg-pink-200 p-5'>
            <h2 className='mt-10 mb-5 text-3xl p-5 text-black font-semibold'> Our Tools</h2>

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