import HotelCard from "../HotelCard/HotelCard";
import { useNavigate } from "react-router-dom";
import { roomsDummyData } from "../../assets/assets";
const FeaturedDestination = () => {


  const navigate=useNavigate()

  return (
    <>
      <div className="bg-(--color-bg-section) py-12 text-center">
        <div className="text-center  px-8 md:px-28">
          <h2 className="text-center text-[30px] md:text-[40px] mb-5  font-extrabold">
            Featured Destination
          </h2>
          <p className="text-(--color-text-secondary) mb-5 md:mb-20 text-sm md:text-[16px] leading-4.5">
            Discover our handpicked selection of exceptional properties around
            the world, offering <br /> unparalleled luxury and unforgettable
            experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8 md:px-28  pb-5">
          {roomsDummyData.map((room, index) => {
            return <HotelCard room={room} key={room._id} index={index} />;
          })}
        </div>
        <button onClick={()=>{
            navigate("/rooms") ; window.scrollTo({
                top:0,
                left:0,
                behavior:"smooth"
            })
        }} className="mt-5 rounded-md py-1  px-4 cursor-pointer text-(--color-primary) border text-sm font-medium">View All Destinations</button>
      </div>
    </>
  );
};

export default FeaturedDestination;
