import { useNavigate, useParams } from "react-router-dom";
// import { roomsDummyData } from "../../assets/assets";
import { useEffect, useState } from "react";
import {
  Calendar,
  Cog,
  ConciergeBell,
  Heart,
  House,
  MapPin,
  Mountain,
  StarIcon,
  WavesLadder,
} from "lucide-react";
import Loader from "../../Components/Loader/Loader";
import { useAppContext } from "../../Context/AppContext";
import toast from "react-hot-toast";

const RoomDetails = () => {
  const { id } = useParams();
  const { getToken, axios, rooms, setRooms } = useAppContext();
  const navigate = useNavigate();
  const [room, setroom] = useState(null);
  const [mainImg, setmainImg] = useState(null);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [isAvailable, setIsAvailable] = useState(false);
  const iconsSpecifications = [
    {
      icon: <House />,
      heading: "Clean & Safe Stay",
      description: "A well-maintained and hygienic space just for you.",
    },
    {
      icon: <Cog />,
      heading: "Enhanced Cleaning",
      description: "This host follows Staybnb's strict cleaning standards.",
    },
    {
      icon: <MapPin />,
      heading: "Excellent Location",
      description: "90% of guests rated the location 5 stars.",
    },
    {
      icon: <Heart />,
      heading: "Smooth Check-In",
      description: "100% of guests gave check-in a 5-star rating.",
    },
  ];

  const checkAvailability = async () => {
    try {
      if (checkInDate >= checkOutDate) {
        toast.error("Check In Date Must Be Less Than Check Out Date");
        return;
      }
      const { data } = await axios.post(`/api/bookings/check-availability`, {
        room: id,
        checkInDate,
        checkOutDate,
      });
      if (data.success) {
        if (data.isAvailable) {
          setIsAvailable(true);
          toast.success("Room Is Available");
        } else {
          setIsAvailable(false);
          toast.error("Room Is Not Available");
        }
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!isAvailable) {
        return checkAvailability();
      } else {
        const { data } = await axios.post(
          `/api/bookings/book`,
          {
            room: id,
            checkInDate,
            checkOutDate,
            guests,
            paymentMethod: "Pay At Hotel",
          },
          {
            headers: {
              Authorization: `Bearer ${await getToken()}`,
            },
          }
        );
        if (data.success) {
          toast.success(`${data.message} Check  your email`);
          navigate(`/my-bookings`);
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const foundRoom = rooms.find((room) => room._id === id);
    if (foundRoom) {
      setroom(foundRoom);
      setmainImg(foundRoom.images[0]);
    }
  }, [id, rooms]);
  if (!room) {
    return (
      <div className=" py-11 flex items-center justify-center mt-20 ">
        <Loader />
      </div>
    );
  }
  return (
    <>
      <div className="details mt-25 md:mt-35 px-8 mx-auto md:px-20 lg:px-32  mb-20">
        <div className=" flex gap-2 items-center">
          <h1 className="font-extrabold  text-2xl md:text-4xl text-(--color-text-main)">
            {room.hotel?.name}
          </h1>{" "}
          <span className=" text-sm">{`(${room?.roomType})`}</span>{" "}
          <span className="bg-orange-500 text-sm px-2 py-1 rounded-full text-white">
            20% off
          </span>
        </div>
        <div className="review  flex gap-2 items-center my-2">
          <div className="flex  items-center">
            <StarIcon
              fill="orange"
              className="text-(--color-bg-card)"
              size={22}
            />
            <StarIcon
              fill="orange"
              className="text-(--color-bg-card)"
              size={22}
            />
            <StarIcon
              fill="orange"
              className="text-(--color-bg-card)"
              size={22}
            />
            <StarIcon
              fill="orange"
              className="text-(--color-bg-card)"
              size={22}
            />
          </div>
          <span>200+ reviews</span>
        </div>
        <div className="flex items-center  gap-1 text-(--color-text-secondary)">
          <MapPin size={15} />
          <p className="text-sm">{room.hotel?.address}</p>
        </div>
        {/* imagesss */}
        <div className="flex flex-col md:flex-row  gap-6 mt-6 justify-between ">
          <div className="mainImg w-full md:w-1/2 rounded-3xl overflow-hidden">
            <div className="relative w-full aspect-[16/10] md:aspect-[5/4] bg-(--color-bg-section)">
              <img
                src={mainImg}
                alt={`${room.hotel?.name} main view`}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="smallImgs w-full md:w-[45%] grid grid-cols-2 gap-4">
            {room?.images.map((item, index) => {
              const isActive = mainImg === item;
              return (
                <button
                  type="button"
                  className={`relative overflow-hidden rounded-2xl aspect-[4/3] border transition ${
                    isActive
                      ? "border-(--color-primary) shadow-(--shadow-card) border-4"
                      : "border-(--color-border) hover:border-(--color-primary-light)"
                  }`}
                  key={index}
                  onClick={() => setmainImg(item)}
                >
                  <img
                    src={item}
                    alt={`${room.hotel?.name} view ${index + 1}`}
                    className="absolute inset-0 h-full w-full object-cover cursor-pointer"
                    loading="lazy"
                  />
                </button>
              );
            })}
          </div>
        </div>
        {/* room highlights */}
        <div className="flex flex-col md:flex-row justify-between mt-10 gap-6">
          <div className="title flex flex-col gap-2">
            <h2 className=" text-2xl md:text-4xl">
              Experience Luxury Like Never Before
            </h2>
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
          </div>
          <div className="price font-bold">
            <span className="text-lg text-(--color-primary) mr-1">
              ${room?.pricePerNight}
            </span>
            <span className="text-(--color-text-secondary)"> / night</span>
          </div>
        </div>
        {/* checkout form */}

        <form
          onSubmit={onSubmitHandler}
          className="my-12 shadow-(--shadow-card)  bg-(--color-bg-card) text-(--color-primary) rounded-lg px-6 py-4  flex flex-col md:flex-row  gap-4 justify-around w-[80%] mx-auto"
        >
          <div className="grow  border-r border-(--color-border)">
            <div className="flex items-center gap-2">
              <Calendar size={17} />
              <label htmlFor="checkIn">Check in</label>
            </div>
            <input
              onChange={(e) => setCheckInDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              id="checkIn"
              type="date"
              className=" rounded border border-(--color-border)  px-3 py-1.5 mt-1.5 text-sm outline-none"
            />
          </div>

          <div className="grow  border-r border-(--color-border)">
            <div className="flex items-center gap-2">
              <Calendar size={17} />
              <label htmlFor="checkOut">Check out</label>
            </div>
            <input
              onChange={(e) => setCheckOutDate(e.target.value)}
              disabled={!checkInDate}
              min={checkInDate}
              id="checkOut"
              type="date"
              className=" rounded border border-(--color-border)  px-3 py-1.5 mt-1.5 text-sm outline-none"
            />
          </div>

          <div className="grow flex md:flex-col max-md:gap-2 max-md:items-center">
            <label htmlFor="guests">Guests</label>
            <input
              min={1}
              max={4}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              id="guests"
              type="number"
              className=" rounded border border-(--color-border)  px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16"
              placeholder="1"
            />
          </div>
          <button
            type="submit"
            className=" rounded-md  py-3 px-4  my-auto cursor-pointer max-md:w-full max-md:py-1 bg-(--color-primary-light) grow border-(--color-border) text-white"
          >
            <span>{isAvailable ? "Book Now " : "Check Availablity"}</span>
          </button>
        </form>
        {/* Specifications */}
        <div className="my-12 space-y-4">
          {iconsSpecifications.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-(--color-bg-section) rounded-lg p-3 hover:bg-(--color-bg-card) transition-all"
            >
              <span className="text-(--color-primary)">{item.icon}</span>
              <div>
                <p className="font-semibold text-(--color-text-main)">
                  {item.heading}
                </p>
                <p className="text-(--color-text-secondary) text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* info */}
        <p className="border-y border-(--color-border) my-7 py-5 px-3 text-(--color-text-secondary) max-w-3xl text-justify">
          Guests will be allocated on the ground floor according to
          availability. You get a comfortable Two bedroom apartment has a true
          city feeling. The price quoted is for two guest, at the guest slot
          please mark the number of guests to get the exact price for groups.
          The Guests will be allocated ground floor according to availability.
          You get the comfortable two bedroom apartment that has a true city
          feeling.
        </p>
        {/* contact */}
        <div className="contactt flex items-start gap-4">
          <div className="h-[56px] w-[56px] rounded-full overflow-hidden border border-(--color-border)">
            <img
              className="h-full w-full object-cover"
              src={room.images[0]}
              alt={room.hotel?.name}
              loading="lazy"
            />
          </div>
          <div className="title ">
            <div className=" flex items-center">
              <span className="md:text-xl">Hosted By</span>{" "}
              <h2 className="font-bold ml-1 text-xl md:text-3xl">
                {room.hotel?.name}
              </h2>
            </div>
            <div className="review  flex gap-2 items-center my-1">
              <div className="flex  items-center">
                <StarIcon
                  fill="orange"
                  className="text-(--color-bg-card)"
                  size={22}
                />
                <StarIcon
                  fill="orange"
                  className="text-(--color-bg-card)"
                  size={22}
                />
                <StarIcon
                  fill="orange"
                  className="text-(--color-bg-card)"
                  size={22}
                />
                <StarIcon
                  fill="orange"
                  className="text-(--color-bg-card)"
                  size={22}
                />
              </div>
              <span>200+ reviews</span>
            </div>
          </div>
        </div>
        <button
          type="button"
          className=" rounded-md mt-7 py-1 px-4  my-auto cursor-pointer max-md:w-full max-md:py-1 bg-(--color-primary-light)  border-(--color-border) text-white"
        >
          Contact Now
        </button>
      </div>
    </>
  );
};

export default RoomDetails;
