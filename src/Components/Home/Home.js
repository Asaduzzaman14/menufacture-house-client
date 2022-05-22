import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Parts from './Parts';
import Reviews from './Reviews';
import Summery from './Summery';

const Home = () => {
    return (
        <>
            <div className='px-5'>

                <Banner></Banner>
                <Parts></Parts>


                <Summery></Summery>
                <Reviews></Reviews>
            </div>


            <Footer></Footer>
        </>
    );
};

export default Home;