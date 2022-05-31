import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';


const Review = ({ userReview }) => {

    const { name, email, review, rattings } = userReview


    return (
        <div className=" mt-2 card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{email}</p>
                <p>{review}</p>
                <div class="rating justify-center">
                    <span className=' mx-1'>{rattings}  </span>
                    <input type="radio" name="rating-1" class="mask mask-star" />
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Review;