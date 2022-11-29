import React, { useEffect, useState } from "react";
import SingleCatagory from "../SingleCatagory/SingleCatagory";
import servicesBanner from '../../../assets/services/serviceBanner.jpg'
import BookingModal from "../../../Components/Slider/BookingModal/BookingModal";

const Catagories = () => {


const [serviceItem, setServiceItem] = useState([]);
const [serviceProduct, setServiceProduct] = useState(null)

useEffect(()=>{
  fetch(`http://localhost:5000/catagories`)
    .then(res =>res.json())
    .then(data=>setServiceItem(data))
},[])
  return (
    <div>
        {
          <div>
            <div className="mx-auto w-4/5">
              <img src={servicesBanner} alt=""></img>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
            {
               serviceItem.map(item=><SingleCatagory
               key={item.id}
               item={item}
               setServiceProduct={setServiceProduct}
               ></SingleCatagory>)
             }
             {serviceProduct &&
              <BookingModal
             serviceProduct={serviceProduct}
             setServiceProduct={setServiceProduct}
             ></BookingModal>}
            </div>
          </div>
            
        }
    </div>
     
  );
};

export default Catagories;
