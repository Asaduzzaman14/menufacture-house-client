import React from 'react';
import { useParams } from 'react-router-dom';

const Parches = () => {

    const { id } = useParams()


    return (
        <div>
            <h2 className="text-xl"> your Parts : {id}</h2>
        </div>
    );
};

export default Parches;



