import EventCard from "../components/EventCard";
import DiscountSection from "../components/DiscountSection";

const events = [
  {
    title: "Albania Kizomba Festival",
    location: "Grand Blue Fafa Resort",
    date: "8 May 2024 22:00",
    tickets: 276,
    guestlist: 29,
    hotel: 112,
    price: "5.759,35",
    image: "/images/kizomba-banner.jpg",
  },
  {
    title: "Albania Kizomba Festival",
    location: "Grand Blue Fafa Resort",
    date: "8 May 2024 22:00",
    tickets: 276,
    guestlist: 29,
    hotel: 112,
    price: "5.759,35",
    image: "/images/kizomba-banner.jpg",
  },
  {
    title: "Albania Kizomba Festival",
    location: "Grand Blue Fafa Resort",
    date: "8 May 2024 22:00",
    tickets: 276,
    guestlist: 29,
    hotel: 112,
    price: "5.759,35",
    image: "/images/kizomba-banner.jpg",
  },
  {
    title: "Albania Kizomba Festival",
    location: "Grand Blue Fafa Resort",
    date: "8 May 2024 22:00",
    tickets: 276,
    guestlist: 29,
    hotel: 112,
    price: "5.759,35",
    image: "/images/kizomba-banner.jpg",
  },
  // Agregá más eventos si querés
];

const MainContent = () => {
  return (
    <main className="flex w-full flex-col xl:flex-row gap-6 px-6 py-8">
      {/* Columna de eventos */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-white mb-6">
          Upcoming Events
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
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
