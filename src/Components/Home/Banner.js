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
                    <p className="mb-5 text-lg ">Fortune Extendables Corp. is a leading supplier of woodworking tools and accessories to the woodworking industry. We offer buyers a convenient and efficient one-stop purchase service with a wide range of woodworking tools, machinery, supplies, and accessories.</p>
                </div>
            </div>
        </div >
    </>
    )
};

export default Banner;