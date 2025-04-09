import DiscountCard from "./DiscountCard";

const DiscountList = ({ coupons, onDelete }) => {
  return (
    <div className="space-y-4">
      {coupons.map((coupon, index) => (
        <DiscountCard key={index} coupon={coupon} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default DiscountList;
