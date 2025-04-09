const EventCard = ({ event }) => (
  <div className="bg-[#1E1E1E] border border-[#333] rounded-xl p-4 shadow-md text-white relative">
    <img
      src={event.image}
      alt={event.title}
      className="w-full h-32 object-cover rounded-lg mb-3"
    />
    <h3 className="text-lg font-semibold line-clamp-1">{event.title}</h3>
    <p className="text-sm text-gray-400 line-clamp-1">{event.location}</p>
    <p className="text-sm text-gray-500 mb-2">{event.date}</p>

    <div className="flex justify-between text-xs text-gray-400 mt-2">
      <span>Tickets: {event.tickets}</span>
      <span>Guestlist: {event.guestlist}</span>
      <span>Hotel: {event.hotel}</span>
    </div>

    <div className="absolute top-4 right-4 bg-emerald-600 text-sm px-2 py-1 rounded-md font-semibold">
      €{event.price}
    </div>
  </div>
);

export default EventCard;
