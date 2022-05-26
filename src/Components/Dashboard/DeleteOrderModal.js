import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrderModal = ({ refetch, orderDeleteId, setOrderDeleteId }) => {

    const { _id } = orderDeleteId
    const handelDelete = () => {
        fetch(`https://gentle-headland-20307.herokuapp.com/deleteOrder/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount === 1) {
                    toast('Delete success')
                    setOrderDeleteId(null)
                    refetch()
                }
            })
    }
    return (
        <>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you Sure You want To Delete : {orderDeleteId.name}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <td><button onClick={() => handelDelete()} className='btn btn-error x-xm'> Delete</button></td>
                        <label onClick for="my-modal-6" class="btn">cancle</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteOrderModal;