import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddProducts = () => {


    const handelFormSubmit = (e) => {
        e.preventDefault();

        const newTool = {
            name: e.target.ToolsName.value,
            desc: e.target.desc.value,
            img: e.target.img.value,
            price: e.target.price.value,
            minOrderQuantity: e.target.minOrderQuantity.value,
            availableQuantity: e.target.availableQuantity.value,

        }
        fetch('https://gentle-headland-20307.herokuapp.com/tool', {
            "method": "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newTool)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success added new Tool', data)
            })
    }


    return (
        <div>
            <div
                className='text-center py-5 mt-15'>
                <h2 className=' text-3xl mb-3'>ADD YOUR Tools</h2>

                <form onSubmit={handelFormSubmit}>
                    <input type="text" name='ToolsName' placeholder="Tool Name" className="input input-bordered input-md w-full max-w-sm mb-4" required />
                    <br />
                    <input type="text" name='desc' className="input input-bordered input-md w-full max-w-sm mb-4 " placeholder="Tool description" required></input>
                    <br />
                    <input type="text" name='img' className="input input-bordered input-md w-full max-w-sm mb-4 " placeholder="Img link" required></input>
                    <br />
                    <input type="number" name='price' className="input input-bordered input-md w-full max-w-sm mb-4 " placeholder="Tool price" required></input>
                    <br />
                    <input type="number" name='minOrderQuantity' className="input input-bordered input-md w-full max-w-sm mb-4 " placeholder="Minimum order quantity" required></input>
                    <br />
                    <input type="number" name='availableQuantity' className="input input-bordered input-md w-full max-w-sm mb-4 " placeholder="Available quantity" required></input>
                    <br />


                    <input type="submit" className="input bg-primary font-bold text-lg text-white input-bordered input-md w-full max-w-xs mb-4" />

                </form>
            </div>
        </div>
    );
};

export default AddProducts;