import { useAppContext } from "../../Context/AppContext";
import HotelCard from "../HotelCard/HotelCard";
import { useNavigate } from "react-router-dom";
import { PlusCircle } from "lucide-react";
import { useEffect } from "react";

const FeaturedDestination = () => {
  const { rooms, fetchRooms } = useAppContext();
  const navigate = useNavigate();
  useEffect(() => {
    fetchRooms();
  }, [rooms]);

  return (
    <div className="bg-(--color-bg-section) py-12 text-center min-h-[70vh] flex flex-col justify-center items-center">
      <div className="text-center px-8 md:px-28">
        <h2 className="text-center text-[30px] md:text-[40px] mb-5 font-extrabold">
          Featured Destination
        </h2>
        <p className="text-(--color-text-secondary) mb-5 md:mb-20 text-sm md:text-[16px] leading-4.5">
          Discover our handpicked selection of exceptional properties around the
          world, offering <br /> unparalleled luxury and unforgettable
          experiences.
        </p>
      </div>

      {rooms.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8 md:px-28 pb-5">
            {rooms.map((room, index) => (
              <HotelCard room={room} key={room._id} index={index} />
            ))}
          </div>
          <button
            onClick={() => {
              navigate("/rooms");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="mt-5 rounded-md py-2 px-6 cursor-pointer text-(--color-primary) border border-(--color-primary) hover:bg-(--color-primary) hover:text-white transition font-medium"
          >
            View All Destinations
          </button>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center ">
          <div className="bg-(--color-bg-card) p-10 rounded-2xl shadow-md w-[90%] md:w-[50%]">
            <PlusCircle
              className="mx-auto text-(--color-primary) mb-5"
              size={40}
            />
            <h3 className="text-xl font-semibold text-(--color-text-main) mb-3">
              No Rooms Available
            </h3>
            <p className="text-(--color-text-secondary) mb-6 text-sm">
              You haven’t added any rooms yet. Head over to your dashboard to
              create your first one.
            </p>
            <button
              onClick={() => {
                navigate("/owner/addRoom");
                scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="cursor-pointer bg-(--color-primary) hover:bg-(--color-primary-dark) text-white py-2 px-6 rounded-lg font-medium transition"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedDestination;
