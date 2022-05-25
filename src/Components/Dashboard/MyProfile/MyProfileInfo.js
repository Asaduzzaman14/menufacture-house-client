import React from 'react';

const MyProfileInfo = () => {
    return (

        <> <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                <h3 className="font-bold text-2xl text-secondary">jsgfh</h3>

                <form  className='grid grid-cols-1 gap-5 mt-4 justify-items-center'>
                    <input type="text" disabled className="input input-bordered input-secondary w-full max-w-xs" />
                    <input type="text" disabled  className="input input-bordered input-secondary w-full max-w-xs" />
                    <select name='sloat' className="select select-bordered w-full max-w-xs">

                      
                    </select>

                    <input type="text" name='name' className="input input-bordered input-secondary w-full max-w-xs" />
                    <input type="email" name='email' className="input input-bordered input-secondary w-full max-w-xs" />
                    <input type="number" name='phone' placeholder="Phone" className="input input-bordered input-secondary w-full max-w-xs" />

                    <input type="submit" value={'Submit'} className="bg-secondary btn text-white input input-bordered input-secondary w-full max-w-xs" />
                </form>
            </div>
        </div>
        </>
    );
};

export default MyProfileInfo;