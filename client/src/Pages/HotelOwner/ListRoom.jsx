import { useState } from "react";
import { roomsDummyData } from "../../assets/assets";

const ListRoom = () => {
  const [rooms, setrooms] = useState(roomsDummyData);
  return (
    <>
      <div className="listRoom">
        {/* ===== Title ===== */}
        <div className="title  mb-8">
          <h1 className="font-extrabold mb-3 text-3xl md:text-4xl text-(--color-text-main)">
            Room Listings
          </h1>
          <p className="text-(--color-text-secondary) text-sm md:text-base leading-relaxed">
            View, edit, or manage all listed rooms. Keep the information
            up-to-date to provide the best <br /> experience for users.
          </p>
        </div>
        {/* Total Hotels */}
        <p className="mb-4">Total Hotels</p>
        <div className="max-w-2xl rounded  pr-3 max-h-80 overflow-y-auto  overflow-x-auto">
          <table className=" w-full p-2  text-(--color-text-secondary) border border-(--color-border)">
            <thead className="  bg-(--color-bg-card) text-(--color-primary-light) text-center">
              <tr>
                <th className="p-2">Name</th>
                <th className="p-2">Facility</th>
                <th className="p-2">Price/night</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="border-b border-(--color-border) hover:bg-(--color-bg-section)/50 transition"
                  >
                    <td className="text-center text-sm py-3 px-4">
                      {item.roomType}
                    </td>
                    <td className="text-center text-sm py-3 px-4">
                      {item.amenities.join(" , ")}
                    </td>
                    <td className="text-center text-sm py-3 px-4">
                      $ {item.pricePerNight}
                    </td>
                    <td className="py-3 px-4 border-t border-gray-300 text-sm text-red-500 text-center">
                      <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={item.isAvailable}
                        />
                        <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-(--color-primary-light) transition-colors duration-200"></div>
                        <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                      </label>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListRoom;
