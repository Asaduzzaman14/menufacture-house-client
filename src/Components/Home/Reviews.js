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
    return (
        <div>
            <h2 className='text-3xl bg-red-900 p-4 mt-10 rounded-lg text-white'>THis is review page: {reviews?.length} </h2>
            <div className='grid justify-center sm:grid-cols-12 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-5'>
                {
                    reviews?.map(review => <Review
                        userReview={review}
                        key={review._id}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;