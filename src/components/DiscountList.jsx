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
            className="bg-cards border border-borderCard rounded-lg p-4 text-white flex justify-between items-center shadow"
          >
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-accent">
                  {coupon.discount}
                  {coupon.type === "Percentage" ? "%" : "€"}
                </span>
                <span className="text-sm text-white/70 font-medium">
                  off – Expires: {coupon.expires}
                </span>
              </div>

              <h4 className="font-bold text-sm mt-1">{coupon.code}</h4>
              {coupon.description && (
                <p className="text-xs text-white/60">{coupon.description}</p>
              )}
            </div>

            <button
              onClick={() => onDelete(coupon.code)}
              className="text-white/60 hover:text-red-400"
              title="Delete coupon"
            >
              <Trash className="w-5 h-5" />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default DiscountList;
