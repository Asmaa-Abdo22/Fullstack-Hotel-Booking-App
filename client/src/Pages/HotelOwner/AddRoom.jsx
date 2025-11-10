import { useState } from "react";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../Context/AppContext";
import toast from "react-hot-toast";
import Loader from "../../Components/Loader/Loader";

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    roomType: "",
    pricePerNight: 0,
    amenities: {
      "Free WiFi": false,
      "Free Breakfast": false,
      "Room Service": false,
      "Mountain View": false,
    },
  });
  const [isloading, setIsLoading] = useState(false);
  const { getToken, axios } = useAppContext();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (
      inputs.roomType === "" ||
      inputs.pricePerNight === 0 ||
      Object.values(inputs.amenities).every((item) => item === false) ||
      Object.values(images).some((item) => item === null)
    ) {
      toast.error("Please Fill In All Details");
      return;
    }
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("roomType", inputs.roomType);
      formData.append("pricePerNight", inputs.pricePerNight);
      const animates = Object.keys(inputs.amenities).filter(
        (item) => inputs.amenities[item]
      );
      formData.append("amenities", JSON.stringify(animates));

      Object.keys(images).forEach((key) => {
        if (images[key]) {
          formData.append("images", images[key]);
        }
      });

      const { data } = await axios.post("/api/rooms", formData, {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      });

      if (data.success) {
        toast.success(data.message);
        setInputs({
          roomType: "",
          pricePerNight: 0,
          amenities: {
            "Free WiFi": false,
            "Free Breakfast": false,
            "Room Service": false,
            "Mountain View": false,
          },
        });
        setImages({
          1: null,
          2: null,
          3: null,
          4: null,
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="addRoom   rounded-xl  max-w-3xl ">
      {/* ===== Title ===== */}
      <div className="title  mb-8">
        <h1 className="font-extrabold mb-3 text-3xl md:text-4xl text-(--color-text-main)">
          Add Room
        </h1>
        <p className="text-(--color-text-secondary) text-sm md:text-base leading-relaxed">
          Fill in the details carefully — room type, price, and amenities — to
          enhance the booking experience for users.
        </p>
      </div>

      <form onSubmit={onSubmitHandler}>
        {/* ===== Images Upload ===== */}
        <p className="font-semibold text-lg mb-3">Images</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {Object.keys(images).map((item) => (
            <label
              htmlFor={`roomImage${item}`}
              key={item}
              className="relative border-2 border-dashed border-(--color-border) rounded-lg overflow-hidden hover:border-(--color-primary-dark) transition duration-300 cursor-pointer"
            >
              <img
                src={
                  images[item]
                    ? URL.createObjectURL(images[item])
                    : assets.uploadArea
                }
                alt={`roomImage${item}`}
                className="w-full h-20 object-cover opacity-90 hover:opacity-100 transition"
              />
              <input
                type="file"
                hidden
                id={`roomImage${item}`}
                onChange={(e) =>
                  setImages({ ...images, [item]: e.target.files[0] })
                }
              />
            </label>
          ))}
        </div>

        {/* ===== Room Type & Price ===== */}
        <div className="flex flex-col sm:flex-row gap-6 mb-10">
          <div className="flex flex-col flex-1">
            <label htmlFor="roomType" className="font-semibold mb-2">
              Room Type
            </label>
            <select
              value={inputs.roomType}
              onChange={(e) =>
                setInputs({ ...inputs, roomType: e.target.value })
              }
              id="roomType"
              className="border border-(--color-border) p-2 bg-(--color-bg-card) rounded-md focus:ring-2 focus:ring-(--color-primary-dark) outline-none"
            >
              <option value="" disabled>
                Select Room Type
              </option>
              <option value="single bed">🛏 Single Bed Room</option>
              <option value="double bed">🛋 Double Room</option>
              <option value="luxury room">✨ Luxury Room</option>
              <option value="family suite">👨‍👩‍👧‍👦 Family Suite</option>
            </select>
          </div>

          <div className="flex flex-col flex-1">
            <label htmlFor="number" className="font-semibold mb-2">
              Price{" "}
              <span className="text-sm text-(--color-text-secondary)">
                /night
              </span>
            </label>
            <input
              placeholder="0"
              value={inputs.pricePerNight}
              onChange={(e) =>
                setInputs({ ...inputs, pricePerNight: e.target.value })
              }
              type="number"
              id="number"
              className="border border-(--color-border) p-2 bg-(--color-bg-card) rounded-md focus:ring-2 focus:ring-(--color-primary-dark) outline-none"
            />
          </div>
        </div>

        {/* ===== Amenities ===== */}
        <div className="Amenities mb-8">
          <p className="font-semibold text-lg mb-3">Amenities</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {Object.keys(inputs.amenities).map((item, index) => (
              <label
                key={index}
                htmlFor={`amenities${index + 1}`}
                className="flex items-center gap-2 bg-(--color-bg-card) border border-(--color-border) rounded-md py-2 px-3 hover:border-(--color-primary-light) transition"
              >
                <input
                  type="checkbox"
                  id={`amenities${index + 1}`}
                  checked={inputs.amenities[item]}
                  onChange={() =>
                    setInputs({
                      ...inputs,
                      amenities: {
                        ...inputs.amenities,
                        [item]: !inputs.amenities[item],
                      },
                    })
                  }
                />
                <span className="text-(--color-text-secondary) text-sm">
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* ===== Submit Button ===== */}

        <button
          disabled={isloading}
          className="w-full py-2 rounded-lg bg-(--color-primary-dark) hover:bg-(--color-primary) text-(--color-text-whitee) font-semibold transition cursor-pointer flex justify-center items-center"
        >
          {isloading ? <Loader /> : "Add Room"}
        </button>
      </form>
    </div>
  );
};

export default AddRoom;
