import { LayoutDashboard, PlusSquare, ListFilter } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isActive, setisActive] = useState(0);
  const links = [
    { to: "/owner", label: "Dashboard", icon: <LayoutDashboard size={17} /> },
    { to: "addRoom", label: "Add Room", icon: <PlusSquare size={17} /> },
    {
      to: "listRoom",
      label: "List Room",
      icon: <ListFilter size={17} />,
    },
  ];

  return (
    <div className="flex flex-col gap-4 text-(--color-text-main) px-3">
      {links.map((item, index) => {
        return (
          <Link
            to={item.to}
            key={index}
            onClick={() => {
              setisActive(index);
            }}
            className={`flex items-center gap-2 px-2 justify-center md:justify-start py-3 hover:bg-(--color-bg-section) hover:text-(--color-primary) transition-colors   duration-300  ${
              isActive === index
                ? "bg-(--color-bg-section) text-(--color-primary) border-r-4 border-blue-400"
                : ""
            }`}
          >
            {item.icon}
            <span className="hidden md:inline">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
