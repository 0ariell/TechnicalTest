import { Ticket, Users, Hotel, MoreHorizontal } from "lucide-react";

const EventCard = ({ event }) => {
  return (
    <div className="bg-cards via-secondary to-accent border border-borderCard rounded-xl p-4 shadow-md text-white relative">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-32 object-cover rounded-lg mb-3"
      />

      <h3 className="text-lg font-semibold">{event.title}</h3>
      <p className="text-sm text-dark-text">{event.location}</p>
      <p className="text-sm text-dark-text/70 mb-2">{event.date}</p>

      <div className="flex justify-between items-center text-xs text-dark-text mt-2">
        <div className="flex items-center gap-1">
          <Ticket className="w-4 h-4" />
          {event.tickets} Tickets
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          {event.guestlist} Guestlist
        </div>
        <div className="flex items-center gap-1">
          <Hotel className="w-4 h-4" />
          {event.hotel} Hotel
        </div>
      </div>

      <div className="absolute top-4 right-4 bg-accent text-sm px-2 py-1 rounded-md font-semibold">
        € {event.price}
      </div>

      <button className="absolute top-4 left-4 p-1 rounded hover:bg-white/10 transition">
        <MoreHorizontal className="w-5 h-5 text-white" />
      </button>
    </div>
  );
};

export default EventCard;