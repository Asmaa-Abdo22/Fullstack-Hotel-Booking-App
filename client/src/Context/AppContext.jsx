import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser, useAuth } from "@clerk/clerk-react";
import { toast } from "react-hot-toast";
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_BASE_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY || "$";
  // const navigate = useNavigate();
  const { user } = useUser();
  const { getToken } = useAuth();
  const [isOwner, setIsOwner] = useState(false);
  const [showHotelReg, setShowHotelReg] = useState(false);
  const [searchCities, setSearchCities] = useState([]);
  const [rooms, setRooms] = useState([]);
  const fetchRooms = async () => {
    try {
      const { data } = await axios.get("/api/rooms");
      if (data.success) {
        setRooms(data.rooms);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const fetchUser = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get("/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data.success) {
        setIsOwner(data.role === "hotelOwner");
        setSearchCities(data.recentSearchedCities);
      } else {
        setTimeout(() => {
          fetchUser();
        }, 5000);
      }
    } catch (error) {
      console.log("error from fetch user func");
      toast.error(error.message);
    }
  };
  useEffect(() => {
    if (user) {
      fetchUser();
    }
  }, [user]);
  useEffect(() => {
    fetchRooms();
  }, []);

  const value = {
    currency,
    user,
    getToken,
    isOwner,
    setIsOwner,
    showHotelReg,
    setShowHotelReg,
    axios,
    searchCities,
    setSearchCities,
    rooms,
    setRooms,
    fetchRooms
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export const useAppContext = () => useContext(AppContext);
