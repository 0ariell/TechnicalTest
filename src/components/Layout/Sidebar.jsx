import { useState } from "react";
import {
  FaBars,
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

import { FaTimes } from "react-icons/fa"; // 👈 importar ícono de cerrar

const Sidebar = ({ isOpen, onClose }) => {
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
    <aside
      className={`bg-[#1E1E1E] text-white fixed md:static top-0 left-0 h-full w-64 p-4 z-40 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      {/* Botón cerrar solo en mobile */}
      <div className="flex justify-between items-center md:hidden mb-6">
        <h1 className="text-2xl font-bold pl-2 text-cyan-400">
          <span className="text-white">DIZ</span>IZID
        </h1>
        <button onClick={onClose} className="text-white text-2xl">
          <FaTimes />
        </button>
      </div>

      {/* En desktop mostramos el título normal */}
      <h1 className="hidden md:block text-2xl font-bold mb-8 pl-2 text-cyan-400">
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

      <div className="absolute bottom-4 text-xs text-gray-500 pl-2">
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
