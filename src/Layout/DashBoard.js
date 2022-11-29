import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Sheard/Header/Navbar';
import { Link } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div>
           <Navbar></Navbar>
           <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
  <Outlet></Outlet>
   
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      
      <li><Link>Sidebar Item 1</Link></li>
      <li><Link>Sidebar Item 2</Link></li>
    </ul>
  
  </div>
</div>

        </div>
    );
};

export default DashBoard;