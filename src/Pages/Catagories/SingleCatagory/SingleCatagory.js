import React from 'react';

const SingleCatagory = ({item,setServiceProduct}) => {
 
    const {image_url,title,seller,resale_price,original_price,years_of_use} = item;
    return (
//         
<div className="card lg:card-side bg-base-100 shadow-xl m-5 ">
  <figure className='w-2/5 '><img className='h-fit' src={image_url} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title p-2">{title}</h2>
    <div className='flex'>
    <p>Retail price: <span className='text-2xl text-red-700 pr-3'>${resale_price}</span></p>
    <p>Original Price: ${original_price}</p>
    </div>
    <p>years_of use :{years_of_use} year</p>
    <p>Seller Name: {seller.name}</p>
    <p>Location: {seller.location}</p>
    <p>Post time: {seller.published_date}</p>
    <div className="card-actions justify-end">
      <label 
      onClick={()=>setServiceProduct(item)}
      htmlFor="bookingModal" 
      className="btn btn-primary">
        Book Now</label>
    </div>
  </div>
</div>
    );
};

export default SingleCatagory;