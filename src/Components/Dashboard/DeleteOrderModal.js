import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrderModal = ({ refetch, orderDeleteId, }) => {
    console.log('idddddddddddddd', orderDeleteId);
    // const { name, _id } = orderDeleteId
    // console.log('deleted item', orderDelete);


    const handelDelete = (id) => {
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount === 1) {
                    toast('success')
                    refetch()
                }
            })
    }
    return (
        <>
            {/* <!-- The button to open modal --> */}

            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">{orderDeleteId}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <label onClick for="my-modal-6" class="btn">yes</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteOrderModal;