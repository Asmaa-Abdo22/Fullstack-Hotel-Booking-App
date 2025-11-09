import { X } from "lucide-react";
import regImage from "../../assets/regImage.png";
import { useAppContext } from "../../Context/AppContext";
import { useState } from "react";
import toast from "react-hot-toast";

const HotelRegestration = () => {
  const { setShowHotelReg, axios, getToken, setIsOwner } = useAppContext();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContactPhone] = useState("");
  const [city, setCity] = useState("");
  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post(`/api/hotels`,{name, address,contact,city},{
        headers:{
          Authorization: `Bearer ${await getToken()}`,
        }
      });
      if(data.success){
        toast.success(data.message)
        setIsOwner(true)
        setShowHotelReg(false)
      }
    } catch (error) {
      console.log("Error from registeration form");
      toast.error(error.message)
    }
  };
  return (
    <>
      <div
        onClick={() => setShowHotelReg(false)}
        className="registerr h-screen fixed top-0 left-0 right-0 z-100 flex items-center justify-center bg-(--color-bg-main)/70 backdrop-blur-md"
      >
        <div className="content relative bg-(--color-bg-card) shadow-(--shadow-card) flex justify-between items-center  lg:w-[65%] rounded-3xl lg:h-[80%] overflow-hidden transition-all duration-300">
          {/* Close Icon */}
          <X
            onClick={() => {
              setShowHotelReg(false);
            }}
            className="absolute right-5 top-4 cursor-pointer text-(--color-text-secondary) hover:text-(--color-primary) transition-colors"
          />

          {/* Left Side Image */}
          <div className="image overflow-hidden h-full hidden lg:block rounded-s-3xl">
            <img
              src={regImage}
              alt="registration"
              className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-500"
            />
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmitHandler}
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col gap-5 items-center py-6 lg:h-full  lg:w-[75%] px-6"
          >
            <p className="text-2xl lg:text-3xl font-semibold mt-4 mb-3 text-(--color-primary)">
              Register Your Hotel
            </p>

            {/* Hotel Name */}
            <div className="hotelName w-full">
              <label
                htmlFor="name"
                className="text-(--color-text-secondary) text-sm"
              >
                Hotel Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                id="name"
                placeholder="Enter Name"
                className="w-full mt-2 border border-(--color-border) outline-none rounded-lg px-3 py-2 bg-(--color-bg-section) focus:border-(--color-primary) transition-all placeholder:text-gray-500"
              />
            </div>

            {/* Phone */}
            <div className="phone w-full">
              <label
                htmlFor="phone"
                className="text-(--color-text-secondary) text-sm"
              >
                Phone
              </label>
              <input
                value={contact}
                onChange={(e) => setContactPhone(e.target.value)}
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter phone"
                className="w-full mt-2 border border-(--color-border) outline-none rounded-lg px-3 py-2 bg-(--color-bg-section) focus:border-(--color-primary) transition-all placeholder:text-gray-500"
              />
            </div>

            {/* Address */}
            <div className="address w-full">
              <label
                htmlFor="address"
                className="text-(--color-text-secondary) text-sm"
              >
                Address
              </label>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                name="address"
                id="address"
                placeholder="Enter Address"
                className="w-full mt-2 border border-(--color-border) outline-none rounded-lg px-3 py-2 bg-(--color-bg-section) focus:border-(--color-primary) transition-all placeholder:text-gray-500"
              />
            </div>

            {/* City */}
            <div className="city w-full">
              <label
                htmlFor="city"
                className="text-(--color-text-secondary) text-sm"
              >
                City
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                name="city"
                id="city"
                className="text-(--color-primary) w-full mt-2 border border-(--color-border) rounded-lg px-3 py-2 bg-(--color-bg-section) focus:border-(--color-primary) outline-none transition-all"
                
              >
                <option value="" disabled >
                  Select City
                </option>
                <option value="Dubai">Dubai</option>
                <option value="Singapore">Singapore</option>
                <option value="New York">New York</option>
                <option value="London">London</option>
              </select>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-(--color-primary) cursor-pointer mr-auto ms-2 mt-2 px-6 py-2 text-(--color-text-whitee) rounded-full hover:bg-(--color-primary-dark) transition-all duration-300 shadow-md"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default HotelRegestration;
