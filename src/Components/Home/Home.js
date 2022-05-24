import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ContuctUs from './ContuctUs';
import HappyClient from './HappyClient';
import Parts from './Parts';
import Reviews from './Reviews';
import Summery from './Summery';

const Home = () => {
    return (
        <>
            <div className='px-5'>

                <Banner></Banner>
                <Parts></Parts>


                <Reviews></Reviews>
                <HappyClient></HappyClient>
                <Summery></Summery>
                <ContuctUs></ContuctUs>
            </div>


            <Footer></Footer>
        </>
    );
};

export default Home;