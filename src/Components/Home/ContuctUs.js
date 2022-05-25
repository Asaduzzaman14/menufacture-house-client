import React from 'react';
import contuct from '../Assets/extra/contuct.webp'


const ContuctUs = () => {
    return (
        <div className='bg-base-200'>
            <h2 className='text-3xl font-mono font-bold mt-10 pt-5 underline text-primary'>Contuct us</h2>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='rounded-2xl w-md' src={contuct} alt="contuct " />

                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        <div className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered" />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" className="input input-bordered" />
                            </div>


                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContuctUs;