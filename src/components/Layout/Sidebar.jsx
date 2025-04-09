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
  FaTimes,
} from "react-icons/fa";

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
      className={`bg-[#1E1E1E] text-white fixed md:static top-0 left-0 w-64 z-40 p-4 transition-transform duration-300 flex flex-col h-screen ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      {/* Mobile header con botón cerrar */}
      <div className="flex justify-between items-center md:hidden mb-6">
        <h1 className="text-2xl font-bold pl-2 text-cyan-400">
          <span className="text-white">DIZ</span>IZID
        </h1>
        <button onClick={onClose} className="text-white text-2xl">
          <FaTimes />
        </button>
      </div>

      {/* Título desktop */}
      <h1 className="hidden md:block text-2xl font-bold mb-8 pl-2 text-cyan-400">
        <span className="text-white">DIZ</span>IZID
      </h1>

      {/* Contenido navegable que crece para empujar footer */}
      <nav className="space-y-2 flex-grow overflow-y-auto">
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

      {/* Footer siempre pegado al fondo */}
      <div className="text-xs text-gray-500 pl-2 mt-auto">
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
