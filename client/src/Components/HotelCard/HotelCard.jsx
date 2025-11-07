import {  MapPin, StarIcon } from "lucide-react";
import { Link } from "react-router-dom";


const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={`rooms/${room._id}`}
      key={room._id}
      className="bg-(--color-bg-main) relative shadow-(--shadow-card) rounded-xl overflow-hidden "
      onClick={()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
      }}
    >
      <img src={room.images[0]} alt={room.roomType} className="w-full" />
      {index % 2 == 0 && (
        <p className="text-(--color-primary) bg-(--color-bg-main) absolute top-3 py-1 px-3 left-3 w-fit rounded-full">
          Best Seller
        </p>
      )}
      <div className="p-4 pt-5">
        <div className="flex items-center justify-between  mb-3">
          <h4 className="font-bold text-xl text-(--color-text-main)">
            {room.hotel.name}
          </h4>
          <div className="flex items-center gap-1">
            <StarIcon className="text-yellow-300" fill="yellow" size={18} />
            <span>4.5</span>
          </div>
        </div>
        <div className="flex items-center  gap-1 text-(--color-text-secondary)">
          <MapPin  size={15}/>
          <p className="text-sm"> {room.hotel.address}</p>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <h5>
            <span className="text-lg">${room.pricePerNight}</span>/<span className="text-(--color-text-secondary)">night</span>
          </h5>
          <button className="rounded-md py-1  px-4 cursor-pointer bg-(--color-bg-card) border-(--color-border) text-(--color-primary-light) text-sm font-medium">
            Book Now{" "}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
