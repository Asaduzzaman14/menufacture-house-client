import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {

    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch('http://localhost:5000/review', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    const rev = reviews.reverse()
    const customerRev = rev.slice(0, 6)

    return (
        <div className='p-5 bg-teal-100 mt-5'>
            <h2 className='text-3xl p-4 mt-5 rounded-lg '>Customer review  </h2>
            <div className='grid justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-x-5'>
                {
                    customerRev?.map(review => <Review
                        userReview={review}
                        key={review._id}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;