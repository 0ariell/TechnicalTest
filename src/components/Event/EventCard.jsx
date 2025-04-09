import { Ticket, Users, Hotel } from "lucide-react";

const EventCard = ({ event }) => {
  return (
    <div className="bg-cards border borderCard rounded-xl overflow-hidden shadow-lg text-white max-w-[250px] max-h-[200px]">
      {/* Imagen superior */}
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-[80px] object-cover"
      />

      {/* Contenido inferior */}
      <div className="px-3 py-2 flex flex-col gap-1">
        {/* Título y precio alineados */}
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-semibold leading-tight line-clamp-2">
            {event.title}
          </h3>
          <div className="bg-[#24D1A4] text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm whitespace-nowrap">
            € {event.price}
          </div>
        </div>

        {/* Ubicación y fecha */}
        <p className="text-xs text-[#D0D0D0] leading-none">{event.location}</p>
        <p className="text-xs text-[#A0A0A0] leading-none">{event.date}</p>

        {/* Stats */}
        <div className="flex justify-between text-[10px] text-[#D0D0D0] pt-1">
          <div className="flex items-center gap-[2px]">
            <Ticket className="w-3 h-3" />
            {event.tickets}
          </div>
          <div className="flex items-center gap-[2px]">
            <Users className="w-3 h-3" />
            {event.guestlist}
          </div>
          <div className="flex items-center gap-[2px]">
            <Hotel className="w-3 h-3" />
            {event.hotel}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
