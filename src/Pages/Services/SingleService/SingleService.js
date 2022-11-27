import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({service}) => {
    const {_id,name,image_url}=service;
    return (
        <div className="card card-compact w-4/5 bg-base-100 shadow-2xl border border-indigo-600 p-5 mx-auto">
  <figure className='h-full'><img className='h-full' src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>If you want to explor more product, please click here... </p>
    <div className="card-actions justify-end">
        <Link className="btn btn-primary" to={`/services/${_id}`}>See All</Link>
      
    </div>
  </div>
</div>
    );
};

export default SingleService;