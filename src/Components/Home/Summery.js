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
        <div>
            <h2 className=' mt-14 text-3xl bg-primary p-4 text-white'>THis is Summery page</h2>
            <div class="stats stats-vertical lg:stats-horizontal shadow">

                <div class="stat">
                    <div class="stat-title">Downloads</div>
                    <div class="stat-value">31K</div>
                    <div class="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div class="stat">
                    <div class="stat-title">New Users</div>
                    <div class="stat-value">4,200</div>
                    <div class="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div class="stat">
                    <div class="stat-title">New Registers</div>
                    <div class="stat-value"><CountUp end={1155} /> </div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>
                <div class="stat">
                    <div class="stat-title">New Registers</div>
                    <div class="stat-value">900</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>

                <div class="stat">
                    <div class="stat-title">New Registers</div>
                    <div class="stat-value">1,200</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default Summery;