import { Trash } from "lucide-react";

const DiscountList = ({ coupons, onDelete }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Generated Coupons</h3>

      {coupons.length === 0 ? (
        <p className="text-white/50 text-sm">No coupons created yet.</p>
      ) : (
        coupons.map((coupon) => (
          <div
            key={coupon.code}
            className="bg-[#1E1E1E] border border-[#2A2A2A] rounded-xl p-4 shadow-[0_0_12px_rgba(0,0,0,0.4)] space-y-4 transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold tracking-wide">{coupon.code}</h4>
              <span className="bg-[cyan]/70 text-white text-xs font-semibold px-2 py-0.5 rounded-md shadow-sm">
                {coupon.discount}
                {coupon.type === "Percentage" ? "%" : "€"} OFF
              </span>
            </div>

            {coupon.description && (
              <p className="text-xs text-gray-400">{coupon.description}</p>
            )}

            <div className="flex justify-between items-center text-[11px] text-gray-500">
              <span>{coupon.type}</span>
              <span>Expires: {coupon.expires}</span>
            </div>

            <button
              onClick={() => onDelete(coupon.code)}
              className="mt-2 w-full flex items-center justify-center gap-1 text-[11px] text-red-400 hover:text-red-500 transition"
              title="Delete coupon"
            >
              <Trash className="w-4 h-4" />
              Delete coupon
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default DiscountList;
