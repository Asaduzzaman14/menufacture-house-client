import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const AddReview = () => {

    const [user] = useAuthState(auth)

    const handelFormSubmit = (e) => {
        e.preventDefault();

        const userReview = {
            name: e.target.userName.value,
            email: e.target.userEmail.value,
            review: e.target.review.value,

        }
        fetch('http://localhost:5000/review', {
            "method": "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success review post', data)
            })
    }



    return (
        <div>
            <h2 className="text-2xl text-red-500">This is Add review</h2>



            <div
                className='text-center py-12 mt-36'>
                <h2 className=' text-3xl mb-3'>ADD YOUR REVIEW</h2>
                <form onSubmit={handelFormSubmit}>
                    <input type="text" name='userName' placeholder="name" className="input input-bordered input-md w-full max-w-sm mb-4" required />
                    <br />
                    <input type="text" name='userEmail' value={user.email} className="input input-bordered input-md w-full max-w-sm mb-4" />
                    <br />
                    <input type="number" name='rattings' className=" input input-bordered input-md w-full max-w-sm mb-4"
                        pattern="[1-5]{1}" title="Three letter country code"
                        required
                    />

                    <br />
                    <textarea name='review' className=" textarea textarea-primary w-full max-w-sm mb-6" placeholder="Your Review" required></textarea>
                    <br />
                    <input type="submit" className="input bg-primary font-bold text-lg text-white input-bordered input-md w-full max-w-xs mb-4" />

                </form>
            </div>

        </div>
    );
};

export default AddReview;