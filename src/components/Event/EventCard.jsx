import { Ticket, Users, Hotel } from "lucide-react";

const EventCard = ({ event }) => {
  return (
    <div className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.015] transition-all duration-300 text-white w-[250px] max-h-[220px]">
      {/* Imagen superior */}
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-[90px] object-cover rounded-t-2xl"
      />

      {/* Contenido inferior */}
      <div className="px-4 py-3 flex flex-col gap-1">
        {/* Título y precio alineados */}
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-semibold text-white leading-tight line-clamp-2">
            {event.title}
          </h3>
            <div className="bg-[cyan]/70 text-white text-[10px] font-bold px-2 py-[9px] rounded-md shadow-md leading-none whitespace-nowrap">
            € {event.price}
          </div>
        </div>

        {/* Ubicación y fecha */}
        <p className="text-[11px] text-gray-400 leading-none">
          {event.location}
        </p>
        <p className="text-[11px] text-gray-500 leading-none">{event.date}</p>

        {/* Stats */}
        <div className="flex justify-between text-[10px] text-gray-400 pt-2">
          <div className="flex items-center gap-1">
            <Ticket className="w-3.5 h-3.5 opacity-70" />
            {event.tickets}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5 opacity-70" />
            {event.guestlist}
          </div>
          <div className="flex items-center gap-1">
            <Hotel className="w-3.5 h-3.5 opacity-70" />
            {event.hotel}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
