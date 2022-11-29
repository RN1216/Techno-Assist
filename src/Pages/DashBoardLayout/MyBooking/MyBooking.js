import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyBooking = () => {
    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}` ;
    console.log(url);
     const {data: bookings = []} = useQuery({
        queryKey:['bookings', user?.email],
        queryFn: async() =>{
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
     })
    return (
        <div>
            <h2 className='text-2xl'>My Booked Services</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Service Name</th>
        <th>Customer Name</th>
        <th>Price</th>
        
      </tr>
    </thead>
    <tbody>
      
      {
        bookings.map((booking, i)=><tr key={booking._id}>
        <th>{i+1}</th>
        <td>{booking.title}</td>
        <td>{booking.name}</td>
        <td>$ {booking.resale_price}</td>
        
      </tr>)
      }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyBooking;