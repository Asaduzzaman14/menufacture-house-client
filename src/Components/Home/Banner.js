import React from 'react';

const Banner = () => {

    return (<>
        <div className="hero min-h-screen w-100 " style={{
            background: `url(https://i.ibb.co/k8YshMy/img5.jpg)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',

        }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to our <br></br> Manufacturer</h1>
                    <p className="mb-5 text-lg ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
            </div>
        </div >
    </>
    )
};

export default Banner;