import { ChevronRight, Search, Settings } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-white/80 space-x-2">
        <span className="text-white font-semibold">Events</span>
        <ChevronRight className="w-4 h-4 text-white/60" />
        <span className="text-teal-400 font-semibold">
          Albania Kizomba Festival
        </span>
      </div>

      {/* User + Actions */}
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-white/10 transition">
          <Search className="w-5 h-5 text-white" />
        </button>
        <button className="p-2 rounded-full hover:bg-white/10 transition">
          <Settings className="w-5 h-5 text-white" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/20" />
          <span className="text-white font-medium text-sm">Adric Walter</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
