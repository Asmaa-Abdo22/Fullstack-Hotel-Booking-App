import { useState } from "react";
import { userBookingsDummyData } from "../../assets/assets";
import { Calendar, MapPin, Users, CreditCard } from "lucide-react";

const MyBookings = () => {
  const [bookings] = useState(userBookingsDummyData);

  return (
    <div className="mt-24 md:mt-32 px-6 md:px-12 lg:px-32 mb-20">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="font-extrabold text-4xl md:text-5xl text-(--color-text-main)">
          My Bookings
        </h1>
        <p className="text-(--color-text-secondary) text-sm md:text-base mt-2">
          Easily manage your past, current, and upcoming hotel reservations all
          in one place. <br />
          Plan your trips seamlessly with just a few clicks.
        </p>
      </div>

      {/* Table Header */}
      <div className="hidden lg:grid lg:grid-cols-3 text-sm font-semibold uppercase text-(--color-text-secondary) border-b border-(--color-border) pb-3 tracking-wide text-center">
        <div>Hotel</div>
        <div>Date & Timings</div>
        <div>Payment</div>
      </div>

      {/* Bookings List */}
      <div className="mt-6 space-y-6">
        {bookings.map((item) => (
          <div
            key={item._id}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 p-5 bg-(--color-bg-card) rounded-2xl shadow-(--shadow-card) hover:shadow-lg transition-shadow"
          >
            {/* Hotel Info */}
            <div className="flex flex-col md:flex-row gap-4 md:items-center items-start">
              <img
                src={item.room.images[0]}
                alt={item.hotel.name}
                className="w-full sm:w-44 h-36 object-cover rounded-xl"
              />
              <div className="flex flex-col gap-1 text-left">
                <div className="flex flex-wrap items-center gap-1">
                  <h2 className="font-bold text-xl text-(--color-text-main)">
                    {item.hotel.name}
                  </h2>
                  <span className="text-sm text-(--color-text-secondary)">
                    ({item.room.roomType})
                  </span>
                </div>
                <div className="flex items-start gap-1 text-(--color-text-secondary)">
                  <MapPin size={15} />
                  <p className="text-sm leading-snug">{item.hotel.address}</p>
                </div>
                <div className="flex items-center gap-1 text-(--color-text-secondary)">
                  <Users size={15} />
                  <span>Guests: {item.guests}</span>
                </div>
                <p className="text-sm mt-1">
                  Total:{" "}
                  <span className="text-(--color-primary) font-semibold">
                    ${item.totalPrice}
                  </span>
                </p>
              </div>
            </div>

            {/* Dates */}
            <div className="flex flex-col justify-center items-start lg:items-center gap-1 text-sm">
              <div className="flex items-center gap-1">
                <Calendar size={16} className="text-(--color-primary)" />
                <span className="font-medium">Check In:</span>
                <span className="text-(--color-text-secondary) ml-1">
                  {new Date(item.checkInDate).toDateString()}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} className="text-(--color-primary)" />
                <span className="font-medium">Check Out:</span>
                <span className="text-(--color-text-secondary) ml-1">
                  {new Date(item.checkOutDate).toDateString()}
                </span>
              </div>
            </div>

            {/* Payment */}
            <div className="flex items-center  gap-2 lg:justify-center">
              <div className="flex items-center gap-2">
                <div
                  className={`w-2.5 h-2.5 rounded-full ${
                    item.isPaid ? "bg-green-500" : "bg-red-500"
                  }`}
                />
                <p
                  className={`font-semibold ${
                    item.isPaid ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {item.isPaid ? "Paid" : "Unpaid"}
                </p>
              </div>
              {!item.isPaid && (
                <button className="flex items-center gap-2 border border-(--color-border) text-(--color-primary) rounded-full px-4 py-1.5 cursor-pointer duration-300 text-sm hover:bg-( --color-text-main)  transition-all">
                  <CreditCard size={14} /> Pay Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
