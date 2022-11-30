import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Sheard/Header/Navbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/AuthProvider";
import useAdmin from "./../Hooks/useAdmin";

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <Outlet></Outlet>
        </div>
        
        {/* Dashboard left slide  */}

        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Booking</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allusers">All Users</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
