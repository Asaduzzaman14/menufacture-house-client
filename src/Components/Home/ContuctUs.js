import React from 'react';
import contuct from '../Assets/extra/contuct.webp'


const ContuctUs = () => {
    return (
        <div className='bg-base-200'>
            <h2 className='text-3xl font-mono font-bold mt-10 pt-5'>Contuct us</h2>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img className='rounded-2xl w-md' src={contuct} alt="contuct " />

                    <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        <div class="card-body">

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" class="input input-bordered" />

                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" class="input input-bordered" />
                            </div>


                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContuctUs;