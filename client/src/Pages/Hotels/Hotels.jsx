import {
  ConciergeBell,
  MapPin,
  Mountain,
  StarIcon,
  WavesLadder,
} from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { useAppContext } from "../../Context/AppContext";

const Hotels = () => {
  const roomTypes = ["Single Bed", "Double Bed", "Luxury Room", "Family Suite"];
  const priceRanges = ["0 to 500", "500 to 1000", "1000 to 2000", "2000 to 3000"];
  const sortOptions = ["Price Low to High", "Price High to Low", "Newest First"];

  const navigate = useNavigate();
  const [openFilters, setOpenFilters] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const { rooms, currency } = useAppContext();

  const [selectedFilters, setSelectedFilters] = useState({
    roomType: [],
    priceRange: [],
  });
  const [selectedSort, setSelectedSort] = useState("");

  // ✅ Handle filter changes
  const handleFilterChange = (e, value, type) => {
    const checked = e.target.checked;
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (checked) {
        updatedFilters[type].push(value);
      } else {
        updatedFilters[type] = updatedFilters[type].filter((item) => item !== value);
      }
      return updatedFilters;
    });
  };

  // ✅ Handle sort change
  const handleSortChange = (value) => {
    setSelectedSort(value);
  };

  // ✅ Room type filter
  const matchesRoomType = (room) => {
    return (
      selectedFilters.roomType.length === 0 ||
      selectedFilters.roomType.includes(room.roomType)
    );
  };

  // ✅ Price range filter
  const matchesPriceRange = (room) => {
    return (
      selectedFilters.priceRange.length === 0 ||
      selectedFilters.priceRange.some((range) => {
        const [min, max] = range.split(" to ").map(Number);
        return room.pricePerNight >= min && room.pricePerNight <= max;
      })
    );
  };

  // ✅ Sort function
  const sortRooms = (a, b) => {
    if (selectedSort === "Price Low to High") return a.pricePerNight - b.pricePerNight;
    if (selectedSort === "Price High to Low") return b.pricePerNight - a.pricePerNight;
    if (selectedSort === "Newest First")
      return new Date(b.createdAt) - new Date(a.createdAt);
    return 0;
  };

  // ✅ Destination filter
  const filterDestination = (room) => {
    const destination = searchParams.get("destination");
    if (!destination) return true;
    return room.hotel.city.toLowerCase().includes(destination.toLowerCase());
  };

  // ✅ Filter + Sort rooms
  const filteredRooms = useMemo(() => {
    return rooms
      .filter(
        (room) =>
          matchesRoomType(room) &&
          matchesPriceRange(room) &&
          filterDestination(room)
      )
      .sort(sortRooms);
  }, [rooms, selectedFilters, selectedSort, searchParams]);

  // ✅ Clear filters
  const clearFilters = () => {
    setSelectedFilters({ roomType: [], priceRange: [] });
    setSelectedSort("");
    setSearchParams({});
  };

  return (
    <div className="mt-25 md:mt-35 px-8 mx-auto md:px-20 lg:px-32 mb-20">
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
        {/* ==== Room List ==== */}
        <div className="col-span-12 lg:col-span-7">
          {filteredRooms.length > 0 ? (
            <div className="flex flex-col gap-4">
              {filteredRooms.map((room) => (
                <div
                  key={room._id}
                  className="card flex flex-col md:flex-row gap-8 p-5 border-b border-(--color-border) rounded-2xl shadow-(--shadow-card) bg-(--color-bg-section)"
                >
                  {/* === Image === */}
                  <div
                    className="w-full md:w-96 cursor-pointer"
                    onClick={() => {
                      navigate(`/rooms/${room._id}`);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <img
                      src={room.images[0]}
                      alt={room.hotel?.name}
                      className="w-full h-64 md:h-56 object-cover rounded-xl"
                    />
                  </div>

                  {/* === Details === */}
                  <div className="grow space-y-3 py-3 md:py-0 flex flex-col justify-between">
                    <div>
                      <p className="text-(--color-text-secondary) text-sm uppercase">
                        {room.hotel?.city}
                      </p>
                      <h3
                        className="text-2xl font-semibold text-(--color-text-main) cursor-pointer"
                        onClick={() => navigate(`/rooms/${room._id}`)}
                      >
                        {room.hotel?.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-(--color-text-secondary)">
                        <StarIcon fill="yellow" size={17} />
                        <span>200+ reviews</span>
                      </div>
                      <div className="flex items-center gap-1 text-(--color-text-secondary)">
                        <MapPin size={15} />
                        <p className="text-sm">{room.hotel?.address}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <div className="bg-(--color-bg-card) rounded-full flex items-center gap-2 px-3 text-sm">
                        <ConciergeBell size={15} />
                        <span>Room Service</span>
                      </div>
                      <div className="bg-(--color-bg-card) rounded-full flex items-center gap-2 px-3 text-sm">
                        <Mountain size={15} />
                        <span>Mountain View</span>
                      </div>
                      <div className="bg-(--color-bg-card) rounded-full flex items-center gap-2 px-3 text-sm">
                        <WavesLadder size={15} />
                        <span>Pool Access</span>
                      </div>
                    </div>

                    <div className="pt-3">
                      <h5 className="font-semibold">
                        <span className="text-lg text-(--color-primary)">
                          {currency} {room?.pricePerNight}
                        </span>
                        <span className="text-(--color-text-secondary)"> / night</span>
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-(--color-text-secondary) py-20">
              <p className="text-lg">No rooms match your search.</p>
              <button
                onClick={clearFilters}
                className="mt-4 px-4 py-2 bg-(--color-primary) text-white rounded-md cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* ==== Filters ==== */}
        <div className="col-span-12 lg:col-span-5 rounded-2xl my-3 px-5 py-3 shadow-(--shadow-card) bg-(--color-bg-section) border border-(--color-border)">
          <div className="header flex justify-between border-b pb-2 border-b-gray-300">
            <p className="uppercase font-medium">Filters</p>
            <div
              className="text-xs cursor-pointer"
              onClick={clearFilters}
            >
              Clear
            </div>
          </div>

          <div className={`mt-4 ${openFilters ? "block" : "hidden"}`}>
            <div className="mb-5">
              <p className="mb-3 font-semibold">Room Type</p>
              {roomTypes.map((title) => (
                <div key={title} className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    checked={selectedFilters.roomType.includes(title)}
                    onChange={(e) => handleFilterChange(e, title, "roomType")}
                  />
                  <label>{title}</label>
                </div>
              ))}
            </div>

            <div className="mb-5">
              <p className="mb-3 font-semibold">Price Range</p>
              {priceRanges.map((range) => (
                <div key={range} className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    checked={selectedFilters.priceRange.includes(range)}
                    onChange={(e) => handleFilterChange(e, range, "priceRange")}
                  />
                  <label>{range}</label>
                </div>
              ))}
            </div>

            <div>
              <p className="mb-3 font-semibold">Sort By</p>
              {sortOptions.map((sort) => (
                <div key={sort} className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name="sort"
                    checked={selectedSort === sort}
                    onChange={() => handleSortChange(sort)}
                  />
                  <label>{sort}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
