import { useAppContext } from "../../Context/AppContext";
import HotelCard from "../HotelCard/HotelCard";
import { useEffect } from "react";

const RecommendedHotels = ({ recommended, setRecommended }) => {
  const { rooms, searchCities } = useAppContext();

  useEffect(() => {
    const filtered = rooms
      .slice()
      .filter((room) => searchCities.includes(room.hotel.city));
    setRecommended(filtered);
  }, [searchCities, rooms]);

  return (
    <div className="bg-(--color-bg-section) py-12 text-center min-h-[70vh] flex flex-col justify-center items-center">
      <div className="text-center px-8 md:px-28">
        <h2 className="text-center text-[30px] md:text-[40px] mb-5 font-extrabold">
          Recommended Hotels
        </h2>
        <p className="text-(--color-text-secondary) mb-5 md:mb-20 text-sm md:text-[16px] leading-4.5">
          Discover our handpicked selection of exceptional properties around
          the world, offering unparalleled <br /> luxury and unforgettable
          experiences.
        </p>
      </div>

      {recommended.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8 md:px-28 pb-5">
          {recommended.map((room, index) => (
            <HotelCard room={room} key={room._id} index={index} />
          ))}
        </div>
      ) : (
        <p className="text-(--color-text-secondary) mt-10">
          No recommended hotels yet. Start searching to get personalized suggestions!
        </p>
      )}
    </div>
  );
};

export default RecommendedHotels;
