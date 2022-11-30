
import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';


const Services = () => {
    const [servicesCatagori ,setServicesCatagori] = useState([]);

    useEffect( ()=>{
        fetch('https://techno-assistance-server.vercel.app/services')
        .then(res =>res.json())
        .then(data=>setServicesCatagori(data))
    },[])
    return (
        <div>
            <h1 className="text-center my-10 text-2xl font-bold">Our Services</h1>
            <div className='p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    servicesCatagori.map(service=><SingleService
                    key = {service.id}
                    service={service}
                    >

                    </SingleService>)
                }
            </div>
            
        </div>
    );
};

export default Services;