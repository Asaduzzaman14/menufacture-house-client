import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const EditProfile = () => {
    const [user] = useAuthState(auth)
    const [modal, setModal] = useState(true)

    const handelUpdate = (e) => {

        e.preventDefault()

        const userInfo = {
            name: user?.displayName,
            email: user?.email,
            education: e.target.education?.value,
            city: e.target.city.value,
            phone: e.target.phone.value,
            linkdin: e.target.linkdin.value
        }

        console.log(userInfo);

        fetch(`https://gentle-headland-20307.herokuapp.com/userinfo${user?.emial}`, {
            "method": "PUT",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('success update user Information')
                setModal(false)
            })

    }




    return (
        <>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg"> Update Your Information </h3>
                    <form onSubmit={handelUpdate} className='grid grid-cols-1 gap-5 mt-4 justify-items-center'>
                        <input type="text" className="input input-bordered input-secondary w-full max-w-xs" required />
                        <input type="email" value={user?.email} disabled className="input input-bordered input-secondary w-full max-w-xs" required />
                        <input type="text" name='education' placeholder='Education' className="input input-bordered input-secondary w-full max-w-xs" required />
                        <input type="text" name='city' placeholder='Your City' className="input input-bordered input-secondary w-full max-w-xs" required />
                        <input type="number" name='phone' placeholder="Phone" className="input input-bordered input-secondary w-full max-w-xs" required />
                        <input type="text" name='linkdin' placeholder="Your Linkdin Profile Link" className="input input-bordered input-secondary w-full max-w-xs" required />

                        <input type="submit" value={'Submit'} className="bg-secondary btn text-white input input-bordered input-secondary w-full max-w-xs" required />
                    </form>


                    <div class="modal-action">
                        {/* <td><button onClick={() => handelUpdata()} className='btn btn-error x-xm'> Delete</button></td> */}
                        <label onClick for="my-modal-6" class="btn bg-green-500">cancle</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditProfile;