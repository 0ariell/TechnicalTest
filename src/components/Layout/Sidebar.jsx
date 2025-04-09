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
    <aside className="sticky top-0 h-screen w-64 shrink-0 bg-gradient-to-b from-[#1A1A1A] to-[#111] text-white p-5 flex flex-col justify-between shadow-lg border-r border-[#2A2A2A]">
      <div>
        <h1 className="text-2xl font-bold mb-10 pl-2 tracking-wide text-cyan-400">
          <span className="text-white">DIZ</span>IZID
        </h1>

        <nav className="flex flex-col gap-1">
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
        Ariel Rivero - Prueba Técnica Verif
      </div>
    </aside>
  );
};

const SidebarItem = ({ icon, label, active, onClick }) => (
  <div
    className={`group flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 relative ${
      active
        ? "bg-[#232323] text-cyan-400 font-semibold"
        : "hover:bg-[#2E2E2E] text-gray-300"
    }`}
    onClick={onClick}
  >
    <span
      className={`text-lg transition-colors ${
        active ? "text-cyan-400" : "group-hover:text-white"
      }`}
    >
      {icon}
    </span>
    <span className="text-sm">{label}</span>

    {active && (
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 bg-cyan-400 rounded-r-md"></div>
    )}
  </div>
);

export default Sidebar;
