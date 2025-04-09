import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "../components/Layout/Sidebar";
import EventCard from "../components/Event/EventCard";
import DiscountSection from "../components/Discount/DiscountSection";

const events = [
  {
    title: "Albania Kizomba Festival",
    location: "Grand Blue Fafa Resort",
    date: "8 May 2024 22:00",
    tickets: 276,
    guestlist: 29,
    hotel: 112,
    price: "5.759,35",
    image: "/img/eventoIMG.png",
  },
  {
    title: "Festival Latino",
    location: "Playa del Carmen",
    date: "15 May 2024 20:00",
    tickets: 350,
    guestlist: 45,
    hotel: 88,
    price: "8.230,50",
    image: "/img/eventoIMG.png",
  },
];

const MainContent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className="flex relative bg-gradient-to-b from-neutral to-black-800
 min-h-screen"
    >
      {/* Sidebar SOLO visible en mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </div>
      )}

      {/* Contenido principal */}
      <div className="flex-1">
        {/* Botón de menú hamburguesa solo en mobile */}
        <div className="md:hidden p-4">
          <button
            className="text-white text-2xl"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars />
          </button>
        </div>

        {/* Layout principal responsive */}
        <main className="px-6 py-4 flex flex-col md:flex-row md:items-start gap-6">
          {/* Columna izquierda: Eventos */}
          <div className="flex-grow flex flex-col gap-10 md:pr-4">
            {/* Upcoming Events */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                Upcoming Events
              </h2>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {events.map((event, index) => (
                  <EventCard key={`upcoming-${index}`} event={event} />
                ))}
              </div>
            </section>

            {/* Past Events */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                Past Events
              </h2>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {events.map((event, index) => (
                  <EventCard key={`past-${index}`} event={event} />
                ))}
              </div>
            </section>
          </div>

          <aside className="md:w-[320px] xl:w-[400px]">
            <DiscountSection />
          </aside>
        </main>
      </div>
    </div>
  );
};

export default MainContent;
