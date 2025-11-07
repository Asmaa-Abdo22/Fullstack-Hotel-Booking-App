import { Building2, DollarSign } from "lucide-react";
import { dashboardDummyData } from "../../assets/assets";
import { useState } from "react";

const Dashboard = () => {
  const [dashboardData, setdashboardData] = useState(dashboardDummyData);
  return (
    <>
      <div className="dashboard ">
        <div className="title">
          <h1 className="font-extrabold mb-3 text-3xl md:text-4xl text-(--color-text-main)">
            Dashboard
          </h1>
          <p className="text-(--color-text-secondary) pr-3 text-sm md:text-[16px]">
            Monitor your room listings, track bookings and analyze revenue—all
            in one place. Stay updated <br /> with real-time insights to ensure
            smooth operations.
          </p>
        </div>
        <div className="flex my-8 gap-4 flex-col md:flex-row">
          {/* Total Bookings */}
          <div className="TotalBookings w-[230px] bg-(--color-bg-card) rounded-lg border border-(--color-border) flex gap-4 items-start p-4">
            <Building2 className="text-(--color-primary-light) " />
            <div className="flex flex-col justify-center gap-2">
              <p className="text-(--color-primary-light) font-semibold text-lg ">
                Total Bookings
              </p>
              <span className="text-(--color-text-secondary)">
                {dashboardData.totalBookings}
              </span>
            </div>
          </div>
          {/* Total Revenue */}
          <div className="totalRevenue w-[230px] bg-(--color-bg-card) rounded-lg border border-(--color-border) flex gap-4 items-start p-4">
            <DollarSign className="text-(--color-primary-light) " />
            <div className="flex flex-col justify-center gap-2">
              <p className="text-(--color-primary-light) font-semibold text-lg ">
                Total Revenue
              </p>
              <span className="text-(--color-text-secondary)">
                $ {dashboardData.totalRevenue}
              </span>
            </div>
          </div>
        </div>
        {/* Recent Bookings */}
        <p className="text-(--color-text-secondary) text-lg font-medium mb-3">
          Recent Bookings
        </p>
        <div className="max-w-2xl rounded  pr-3 max-h-80 overflow-y-scroll">
          <table className=" w-full p-2  text-(--color-text-secondary) border border-(--color-border)">
            <thead className="  bg-(--color-bg-card) text-(--color-primary-light) text-center">
              <tr>
                <th className="p-2">User Name</th>
                <th className="p-2 ">Room Name</th>
                <th className="p-2">Total Amount</th>
                <th className="p-2">Payment Status</th>
              </tr>
            </thead>
            <tbody className="text-sm ">
              {dashboardData.bookings.map((item, index) => {
                return (
                  <tr key={index} className=" text-center border-t border-(--color-border) hover:bg-(--color-bg-section)/40 transition">
                    <td className="py-3 px-4 ">
                      {item.user.username}
                    </td>
                    <td className="py-3 px-4 ">
                      {item.room.roomType}
                    </td>
                    <td className="py-3 px-4 ">
                     $ {item.totalPrice}
                    </td>
                    <td >
                      <button className={`mr-1 py-1 px-3 text-xs rounded-full mx-auto ${item.isPaid?"bg-green-200 text-green-600" :"bg-orange-200 text-orange-600"}`}>{item.isPaid? "Completed":"Pending"}</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
