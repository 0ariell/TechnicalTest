import { Trash2 } from "lucide-react";

const DiscountCard = ({ coupon, onDelete }) => {
  return (
    <div className="bg-cards border border-borderCard p-4 rounded-xl text-white relative shadow-md">
      <h4 className="text-md font-bold text-accent">{coupon.code}</h4>
      <p className="text-sm text-dark-text">{coupon.description}</p>
      <p className="text-2xl font-bold mt-2">{coupon.discount}% OFF</p>
      <p className="text-xs text-dark-text/50 mt-1">
        Expires: {coupon.expires}
      </p>

      <button
        onClick={() => onDelete(coupon.code)}
        className="absolute top-3 right-3 hover:text-red-500"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default DiscountCard;
