import DiscountForm from "./DiscountForm";
import DiscountList from "./DiscountList";
import { useState } from "react";

const DiscountSection = () => {
  const [coupons, setCoupons] = useState([
    {
      code: "PETER",
      description: "Peters discount code",
      discount: 50,
      type: "Percentage",
      expires: "08 November 2024",
    },
    {
      code: "AMBER",
      description: "Ambers discount code",
      discount: 20,
      type: "Percentage",
      expires: "08 July 2024",
    },
  ]);

  const addCoupon = (coupon) => {
    setCoupons([...coupons, coupon]);
  };

  const deleteCoupon = (code) => {
    setCoupons(coupons.filter((c) => c.code !== code));
  };

  return (
    <aside className="sticky top-0 w-full xl:w-[320px] p-4 space-y-6">
      <DiscountForm onAdd={addCoupon} />
      <DiscountList coupons={coupons} onDelete={deleteCoupon} />
    </aside>
  );
};

export default DiscountSection;
