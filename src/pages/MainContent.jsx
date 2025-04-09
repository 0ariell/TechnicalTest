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
    title: "Albania Kizomba Festival",
    location: "Grand Blue Fafa Resort",
    date: "8 May 2024 22:00",
    tickets: 276,
    guestlist: 29,
    hotel: 112,
    price: "5.759,35",
    image: "/img/eventoIMG.png",
  },
];

const MainContent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex relative">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)}/>

      {/* Contenido principal */}
      <div className="flex-1 min-h-screen bg-[#121212] md:ml-64">
        {/* Botón de menú arriba del todo en mobile */}
        <div className="md:hidden p-4">
          <button
            className="text-white text-2xl"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FaBars />
          </button>
        </div>

        <main className="px-6 py-4 flex flex-col gap-10">
          {/* Upcoming Events */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              Upcoming Events
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:overflow-visible">
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
            <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:overflow-visible">
              {events.map((event, index) => (
                <EventCard key={`past-${index}`} event={event} />
              ))}
            </div>
          </section>

          {/* Sección de descuentos */}
          <section>
            <DiscountSection />
          </section>
        </main>
      </div>
    </div>
  );
};

export default MainContent;
