import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const { id } = useParams();

    const [user] = useAuthState(auth)
    const [q, setQ] = useState(0)

    const [service, setService] = useState({})
    const [isReload, setIsReload] = useState(false)

    useEffect(() => {

        const url = `http://localhost:5000/tool/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])


    let { name, price, img, desc, minOrderQuantity, availableQuantity } = service;

    //---quantity-----

    const handleOrder = (e) => {
        e.preventDefault();

        //.................................................
        let orderQ = e.target.number.value;
        console.log(orderQ);
        if (orderQ > minOrderQuantity && orderQ < availableQuantity) {
            const address = e.target.address.value;
            const quantity = e.target.number.value;

            const order = {
                name: name,
                address: address,
                quantity: quantity,
                email: user.email,
                price: price
            };
            console.log(order);
            fetch("http://localhost:5000/order", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(order),
            })
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data);
                    e.target.reset();
                    setIsReload(!isReload);
                });

            // ......................................
            setQ(orderQ);
            // availableQuantity = availableQuantity - orderQ;
            // const updatedParts = { availableQuantity };

            //     fetch(`http://localhost:5000/tool/${id}`, {
            //         method: "PATCH",
            //         headers: {
            //             "content-type": "application/json",
            //         },

            //         body: JSON.stringify(updatedParts),
            //     })
            //         .then((res) => res.json())
            //         .then((data) => {
            //             console.log(data);
            //             toast.success('updated ok')
            //         });
        }
        else {
            alert('You cannot order parts less than minimum quantity')
        }


    }
    return (

        <div className="card lg:card-side bg-orange-50 shadow-xl text-center my-6 w-[800px] mx-auto text-center">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <h4 className="card-title">Price: {price}</h4>
                <h4 className="card-title">Minimum: {minOrderQuantity}</h4>
                -  <h4 className="card-title">Available: {availableQuantity}</h4>
                <p className="card-title"><small>Des: {desc}</small></p>
                <h2 className='card-title text-purple-500 font-bold font-mono text-left'>User-name: {user?.displayName}</h2>
                <h3 className='card-title text-purple-500 font-bold font-mono text-left'>User-email: {user?.email}</h3>

                <form onSubmit={handleOrder}>
                    <input
                        type="text"
                        name="partsName"
                        disabled
                        value={name}
                        className="input input-bordered w-full max-w-xs mb-2"
                    />
                    <br />
                    <input
                        value={minOrderQuantity?.value}
                        type="number"
                        name="number"
                        className="input input-bordered w-full max-w-xs mb-2"
                    />
                    <br />
                    <input
                        type="email"
                        name="email"
                        disabled
                        value={user?.email}
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs mb-2 font-semibold"
                    />
                    <br />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        className="input input-bordered w-full max-w-xs mb-2"
                    />
                    <br />
                    <input
                        type="number"
                        placeholder="Phone Number"
                        className="input input-bordered w-full max-w-xs mb-2"
                    />
                    <br />

                    <input
                        type="submit"
                        value="Place Order"
                        className="input input-bordered w-full max-w-xs btn btn-primary"
                    />
                </form>

            </div>
        </div>
    );
}

export default Purchase;