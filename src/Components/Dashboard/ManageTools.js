import React, { useEffect, useState } from 'react';
import ManageTool from './ManageTool';

const ManageTools = () => {


    const [tools, setTools] = useState([])

    useEffect(() => {
        fetch('https://gentle-headland-20307.herokuapp.com/parts', {
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
            <h2 className="text-2xl text-white bg-red-900">Manage All Tools</h2>

            <div>
                <h2 className="text-2xl">All tools:{tools?.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>no.</th>
                                <th>Name</th>
                                <th>email</th>
                                <th>min order quantity</th>
                                <th>abailavle quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tools?.map((tool, index) => <ManageTool
                                    key={tool._id}
                                    tool={tool}
                                    index={index}
                                ></ManageTool>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>



        </div>
    );
};

export default ManageTools;