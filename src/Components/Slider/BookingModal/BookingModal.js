import React, { useContext } from "react";

import { AuthContext } from './../../../context/AuthProvider';

const BookingModal = ({ serviceProduct,setServiceProduct }) => {

  const {user} = useContext(AuthContext)
  const {
    image_url,
    title,
    
    resale_price,
    original_price,
    years_of_use,
  } = serviceProduct;

  const handleBookingModal=event=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const bookingItem ={name,phone,email,title}
    console.log(bookingItem);
    setServiceProduct(null);
    form.reset();
  }
  return (
    <>
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="bookingModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-xl font-bold p-5">Product Name : {title}</h3>
          <div className="flex justify-around">
            <img className="w-32 h-24" src={image_url} alt=""></img>
            <div className="d-block">
              <p className="text-2xl  pb-3">
                Availiable price:{" "}
                <span className="text-2xl text-red-700 font-bold">
                  ${resale_price}
                </span>
              </p>
              <p>
                Original price:{" "}
                <span className="text-xl">${original_price}</span>
              </p>
              <p>
                Use Duration:{" "}
                <span className="text-xl">{years_of_use} years</span>
              </p>
            </div>
          </div>
          
          <form onSubmit={handleBookingModal} className="text-center m-5">
          <input type="text" name="name" placeholder="User Name" className="input input-bordered w-full max-w-xs m-2" />
          <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs m-2" />
          <input type="text" name="email" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full max-w-xs m-2" readOnly/>
          <div className="text-center">
            <button type="submit" className="btn btn-primary ">Booked</button>
          </div>
          </form>
          
        </div>
      </div>
    </>
  );
};

export default BookingModal;
