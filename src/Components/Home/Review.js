import React from 'react';


const Review = ({ userReview }) => {

    const { name, email, review } = userReview


    return (
        <div className=" mt-2 card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{email}</p>
                <p>{review}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Review;