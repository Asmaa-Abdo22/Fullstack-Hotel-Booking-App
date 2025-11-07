import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Hotels from "./Pages/Hotels/Hotels";
import Experience from "./Pages/Experience/Experience";
import About from "./Pages/About/About";
import RoomDetails from "./Pages/RoomDetails/RoomDetails";
import MyBookings from "./Pages/MyBookings/MyBookings";
import LayOutt from "./Pages/HotelOwner/LayOutt";
import Dashboard from "./Pages/HotelOwner/Dashboard";
import AddRoom from "./Pages/HotelOwner/AddRoom";
import ListRoom from "./Pages/HotelOwner/ListRoom";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "rooms", element: <Hotels /> },
        { path: "rooms/:id", element: <RoomDetails /> },
        { path: "experience", element: <Experience /> },
        { path: "about", element: <About /> },
        { path: "my-bookings", element: <MyBookings /> },
      ],
    },
    {path:"/owner" ,element:<LayOutt/>,children:[
      {index:true, element:<Dashboard/>},
      {path:"addRoom", element:<AddRoom/>},
      {path:"listRoom", element:<ListRoom/>},
    ]}
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
