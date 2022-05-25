import React from 'react';
import CountUp from 'react-countup';

const Summery = () => {


    const BuisnessSummery = [
        {
            _id: 1,
            title: 'Winson Herry',
            value: 'California',
            img: ''
        },
        {
            _id: 2,
            title: 'Winson Herry',
            value: 'California',
            img: ''
        },
        {
            _id: 3,
            title: 'Winson Herry',
            value: 'California',
            img: ''
        },
        {
            _id: 4,
            title: 'Winson Herry',
            value: 'California',
            img: ''
        },
    ]



    return (
        <div className='bg-cyan-100 pb-20'>
            <h2 className=' mt-14 text-3xl p-4 '>Buisness Summery</h2>
            <div className="stats stats-vertical lg:stats-horizontal shadow ">

                <div className="stat">
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value"><CountUp end={2150} />  </div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-title">New Users</div>
                    <div className="stat-value"><CountUp end={4150} /> </div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value"><CountUp end={1155} /> </div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                <div className="stat">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value"><CountUp end={980} /></div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

                <div className="stat">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value"><CountUp end={1200} /></div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default Summery;