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
  return (
    <main className="flex w-full flex-col xl:flex-row gap-6 px-6 py-8">
      {/* Contenedor izquierdo: todos los eventos */}
      <div className="flex-1 flex flex-col gap-10">
        {/* Upcoming Events */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {events.map((event, index) => (
              <EventCard key={`upcoming-${index}`} event={event} />
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Past Events</h2>
          <div className="grid grid-cols-2 gap-x-3 gap-y-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {events.map((event, index) => (
              <EventCard key={`past-${index}`} event={event} />
            ))}
          </div>
        </div>
      </div>

      {/* Columna derecha: Cupones */}
      <div className="w-full xl:w-[320px] shrink-0">
        <DiscountSection />
      </div>
    </main>
  );
};

export default MainContent;
