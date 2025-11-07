import {
  ConciergeBell,
  MapPin,
  Mountain,
  StarIcon,
  WavesLadder,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {  roomsDummyData } from "../../assets/assets";
const Hotels = () => {
 
  
  const roomTypes = [
    { title: "Single Bed" },
    { title: "Double Bed" },
    { title: "Luxury Room" },
    { title: "Family Suite" },
  ];
  const priceRanges = [
    { price: "0 to 500" },
    { price: "500 to 1000" },
    { price: "1000 to 2000" },
    { price: "2000 to 3000" },
  ];
  const sortOptions = [
    { sort: "Price Low To High" },
    { sort: "Price High To Low" },
    { sort: "Newest First " },
  ];
  const navigate = useNavigate();
  const [openFilters, setopenFilters] = useState(true);
  return (
    <>
      <div className=" mt-25 md:mt-35 px-8 mx-auto md:px-20 lg:px-32 mb-20">
        <div className="title">
          <h1 className="font-extrabold mb-3 text-4xl text-(--color-text-main)">
            Hotel Rooms
          </h1>
          <p className="text-(--color-text-secondary) text-sm md:text-[16px]">
            Take advantage of our limited-time offers and special packages to
            enhance your stay and create <br /> unforgettable memories.
          </p>
        </div>
        <div className="content grid grid-cols-12 gap-4 md:gap-12 mt-10">
          <div className=" col-span-12 lg:col-span-7">
            <div className="allcards flex flex-col gap-4 ">
              {roomsDummyData.map((room, index) => (
                <div
                  key={room._id}
                  className="card flex flex-col md:flex-row gap-8 p-5 md:p-6 border border-transparent border-b border-b-(--color-border) rounded-2xl my-3 shadow-(--shadow-card) bg-(--color-bg-section)"
                >
                  {/* img */}
                  <div
                    className="image w-full md:w-96  rounded-xl cursor-pointer"
                    onClick={() => {
                      navigate(`/rooms/${room._id}`);
                      window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    <img
                      src={room.images[0]}
                      alt={room.hotel.name}
                      className="w-full h-64 md:h-56 object-cover rounded-xl shadow-(--shadow-card)"
                    />
                  </div>

                  {/* content */}
                  <div className="cardContent grow space-y-3 py-3 md:py-0 flex flex-col justify-between">
                    <div className="space-y-2">
                      <p className="text-(--color-text-secondary) text-sm tracking-wide uppercase">
                        {room.hotel.city}
                      </p>
                      <h3
                        className="text-2xl font-semibold text-(--color-text-main) cursor-pointer"
                        onClick={() => {
                          navigate(`/rooms/${room._id}`);
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        {room.hotel.name}
                      </h3>

                      <div className="flex items-center gap-2 text-sm text-(--color-text-secondary)">
                        <StarIcon
                          fill="yellow"
                          size={17}
                          className="text-yellow-500"
                        />
                        <span>200+ <span className="ms-1">reviews</span></span>
                      </div>

                      <div className="flex items-center gap-1 text-(--color-text-secondary)">
                        <MapPin size={15} />
                        <p className="text-sm">{room.hotel.address}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <div className="bg-(--color-bg-card) rounded-full flex items-center gap-2 w-fit p-1 px-3 text-sm">
                        <ConciergeBell size={15} />
                        <span>Room Service</span>
                      </div>
                      <div className="bg-(--color-bg-card) rounded-full flex items-center gap-2 w-fit p-1 px-3 text-sm">
                        <Mountain size={15} />
                        <span>Mountain View</span>
                      </div>
                      <div className="bg-(--color-bg-card) rounded-full flex items-center gap-2 w-fit p-1 px-3 text-sm">
                        <WavesLadder size={15} />
                        <span>Pool Access</span>
                      </div>
                    </div>

                    {/* price */}
                    <div className="pt-3">
                      <h5 className="font-semibold">
                        <span className="text-lg text-(--color-primary)">
                          ${room.pricePerNight}
                        </span>
                        <span className="text-(--color-text-secondary)">
                          {" "}
                          / night
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={` ${openFilters?"h-[500px]":"h-auto" } col-span-12 lg:col-span-5 rounded-2xl my-3 px-5 py-3 shadow-(--shadow-card) bg-(--color-bg-section) border  border-(--color-border) `}>
            <div className="header flex justify-between border-b pb-2 border-b-gray-300">
              <p className="uppercase font-medium">filters</p>
              <div className="text-xs cursor-pointer">
                <span
                  className="block md:hidden "
                  onClick={() => {
                    setopenFilters(!openFilters);
                  }}
                >
                  {openFilters ? "HIDE" : "SHOW"}{" "}
                </span>
                <span className="md:block hidden">CLEAR</span>
              </div>
            </div>

            <div className={` ${openFilters?"h-auto":"hidden" } filter-content mt-4`}>
              <div className="popularFilter ">
                <p className="mb-3 font-semibold">Popular Filters</p>
                {roomTypes.map((item, index) => {
                  return (
                    <div key={index} className="flex gap-2 items-center">
                      <input type="checkbox" name="roomTypes" id={item.title} />
                      <label htmlFor={item.title}>{item.title}</label>
                    </div>
                  );
                })}
              </div>
              <div className="priceRanges my-5">
                <p className="mb-3 font-semibold">Price Ranges</p>
                {priceRanges.map((item, index) => {
                  return (
                    <div key={index} className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        name="priceRanges"
                        id={item.price}
                      />
                      <label htmlFor={item.price}>{item.price}</label>
                    </div>
                  );
                })}
              </div>
               <div className="sortOptions ">
                <p className="mb-3 font-semibold">Sort By</p>
                {sortOptions.map((item, index) => {
                  return (
                    <div key={index} className="flex gap-2 items-center">
                      <input type="radio" name="sortOptions" id={item.sort} />
                      <label htmlFor={item.sort}>{item.sort}</label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotels;
