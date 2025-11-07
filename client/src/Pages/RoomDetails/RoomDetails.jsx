import { useParams } from "react-router-dom";
import { roomsDummyData } from "../../assets/assets";
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

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setroom] = useState(null);
  const [mainImg, setmainImg] = useState(null);
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
  useEffect(() => {
    const foundRoom = roomsDummyData.find((room) => room._id === id);
    if (foundRoom) {
      setroom(foundRoom);
      setmainImg(foundRoom.images[0]);
    }
  }, [id]);
  if (!room) {
    return <p className="text-center mt-20 text-lg">Loading...</p>;
  }
  return (
    <>
      <div className="details mt-25 md:mt-35 px-8 mx-auto md:px-20 lg:px-32  mb-20">
        <div className=" flex gap-2 items-center">
          <h1 className="font-extrabold  text-2xl md:text-4xl text-(--color-text-main)">
            {room.hotel.name}
          </h1>{" "}
          <span className=" text-sm">{`(${room.roomType})`}</span>{" "}
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
          <p className="text-sm">{room.hotel.address}</p>
        </div>
        {/* imagesss */}
        <div className="flex flex-col md:flex-row  gap-6 mt-6 justify-between ">
          <div className="mainImg w-full md:w-1/2">
            <img
              src={mainImg}
              alt="main img"
              className="rounded-3xl object-cover"
            />
          </div>
          <div className="smallImgs w-full md:w-[45%] grid grid-cols-2 gap-4">
            {room?.images.map((item, index) => {
              return (
                <div
                  className="cursor-pointer "
                  key={index}
                  onClick={() => setmainImg(item)}
                >
                  <img
                    src={item}
                    alt="item img"
                    className={`${
                      mainImg === item ? "border-4 border-orange-500" : ""
                    } rounded-3xl object-cover w-full`}
                  />
                </div>
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
              ${room.pricePerNight}
            </span>
            <span className="text-(--color-text-secondary)"> / night</span>
          </div>
        </div>
        {/* checkout form */}

        <form className="my-12 shadow-(--shadow-card)  bg-(--color-bg-card) text-(--color-primary) rounded-lg px-6 py-4  flex flex-col md:flex-row  gap-4 justify-around w-[80%] mx-auto">
          <div className="grow  border-r border-(--color-border)">
            <div className="flex items-center gap-2">
              <Calendar size={17} />
              <label htmlFor="checkIn">Check in</label>
            </div>
            <input
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
              id="guests"
              type="number"
              className=" rounded border border-(--color-border)  px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16"
              placeholder="0"
            />
          </div>
          <button
            type="submit"
            className=" rounded-md  py-3 px-4  my-auto cursor-pointer max-md:w-full max-md:py-1 bg-(--color-primary-light) grow border-(--color-border) text-white"
          >
            <span>Check Availablity</span>
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
          <img
            className="w-[50px] h-[50px] rounded-full"
            src={room.images[0]}
            alt={room.hotel.name}
          />
          <div className="title ">
            <div className=" flex items-center">
              <span className="md:text-xl">Hosted By</span>{" "}
              <h2 className="font-bold ml-1 text-xl md:text-3xl">
                {room.hotel.name}
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
