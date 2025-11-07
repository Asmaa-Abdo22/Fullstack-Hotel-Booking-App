import { useState } from "react";
import Nav from "../../Components/hotelOwner/Nav";
import Sidebar from "../../Components/hotelOwner/Sidebar";
import { Outlet } from "react-router-dom";

const LayOutt = () => {
  
  return (
    <>
      <Nav />
      <div className="flex  mt-25 min-h-screen">
        <div
          className={`w-15 md:w-50  sticky top-20 h-[calc(100vh-5rem)] border-r-2 border-(--color-border)`}
        >
          <Sidebar
           
          />
        </div>
        <div className="  grow  px-3 mx-auto md:px-10 mb-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default LayOutt;
