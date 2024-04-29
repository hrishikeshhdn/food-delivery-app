import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useCart, useDispatchCart } from '../components/ContextReducer';

export default function Cart() {
    let data = useCart();
    let dispatch = useDispatchCart();

    // Check if the cart is empty
    if (data.length === 0) {
        return (
            <div>
                <div className='m-5 w-100 text-center text-white fs-3'> The Cart is Empty! </div>
            </div>
        );
    }

    // Function to handle checkout
    const handleCheckOut = async () => {
      let userEmail = localStorage.getItem("userEmail");
      let response = await fetch("http://localhost:5000/api/auth/orderData", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              order_data: data,
              email: userEmail,
              order_date: new Date().toDateString()
          })
      });
      console.log("JSON RESPONSE:::::", response.status)
      if (response.status === 200) {
          dispatch({ type: "DROP" });
      }
  };
  
 // Calculate total price
 let totalPrice = data.reduce((total, food) => total + food.price, 0);
    return (
        <div>
            <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
                <table className='table table-hover  rounded border'>
                    <thead className=' text-success fs-4'>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Quantity</th>
                            <th scope='col'>Option</th>
                            <th scope='col'>Amount</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((food, index) => (
                            <tr key={index}>
                                <th scope='row'>{index + 1}</th>
                                <td>{food.name}</td>
                                <td>{food.qty}</td>
                                <td>{food.size}</td>
                                <td>{food.price}</td>
                                <td><button type="button" className="btn p-0" onClick={() => { dispatch({ type: "REMOVE", index: index }) }}> <FontAwesomeIcon icon={faTrash} /></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div><h1 className='fs-2 text-white'>Total Price: {totalPrice}/-</h1></div>
                <div>
                    <button className='btn bg-danger text-white mt-5' onClick={handleCheckOut}> Check Out </button>
                </div>
            </div>
        </div>
    );
}
