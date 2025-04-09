import { useState } from "react";
import {
  FaHome,
  FaCalendarAlt,
  FaTicketAlt,
  FaTags,
  FaHotel,
  FaUsers,
  FaUserFriends,
  FaBuilding,
  FaChartBar,
} from "react-icons/fa";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Events");

  const menuItems = [
    { icon: <FaHome />, label: "Home" },
    { icon: <FaCalendarAlt />, label: "Events" },
    { icon: <FaTicketAlt />, label: "Tickets" },
    { icon: <FaTags />, label: "Issued Tickets" },
    { icon: <FaTags />, label: "Discount codes" },
    { icon: <FaHotel />, label: "Hotels" },
    { icon: <FaUsers />, label: "Membership" },
    { icon: <FaUserFriends />, label: "Guestlist" },
    { icon: <FaBuilding />, label: "Organizations" },
    { icon: <FaChartBar />, label: "Reports" },
  ];

  return (
    <aside className="sticky top-0 h-screen bg-[#1E1E1E] text-white flex flex-col justify-between p-4 shrink-0 w-64">
      <div>
        <h1 className="text-2xl font-bold mb-8 pl-2 text-cyan-400">
          <span className="text-white">DIZ</span>IZID
        </h1>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              active={activeItem === item.label}
              onClick={() => setActiveItem(item.label)}
            />
          ))}
        </nav>
      </div>

      <div className="text-xs text-gray-500 pl-2">
        Ariel Rivero - PruebaTecnica Verif
      </div>
    </aside>
  );
};

const SidebarItem = ({ icon, label, active, onClick }) => (
  <div
    className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-700 transition-colors ${
      active ? "bg-[#2A2A2A]" : ""
    }`}
    onClick={onClick}
  >
    <span className="text-lg">{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export default Sidebar;
