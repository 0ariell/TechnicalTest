import { useState } from "react";

const DiscountForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    code: "",
    description: "",
    discount: 20,
    type: "Percentage",
    active: true,
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const toggleActive = () => {
    setForm((prev) => ({ ...prev, active: !prev.active }));
  };

  const handleSubmit = () => {
    if (!form.code) return;
    onAdd({ ...form, expires: "TBD" });
    setForm({
      code: "",
      description: "",
      discount: 20,
      type: "Percentage",
      active: true,
    });
  };

  return (
    <div className="bg-[#1E1E1E] border border-[#2A2A2A] text-white p-5 rounded-2xl shadow-[0_0_12px_rgba(0,0,0,0.4)] space-y-4 transition-transform duration-300 ease-in-out hover:scale-105">
      <h3 className="text-lg font-semibold">Create Discount</h3>

      {/* Code + Active Toggle */}
      <div className="space-y-1">
        <label className="text-sm text-white/80">Coupon Code</label>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            className="bg-[#2A2A2A] border border-[#3A3A3A] px-3 py-2 rounded-lg w-full text-sm focus:outline-none focus:ring-1 focus:ring-accent"
            value={form.code}
            onChange={(e) => handleChange("code", e.target.value)}
          />
          <button
            onClick={toggleActive}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition"
          >
            <span
              className={`w-3 h-3 rounded-full ${
                form.active ? "bg-green-500" : "bg-red-500"
              }`}
            />
            <span className="text-sm font-medium">
              {form.active ? "Active" : "Inactive"}
            </span>
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-1">
        <label className="text-sm text-white/80">Description</label>
        <input
          type="text"
          className="bg-[#2A2A2A] border border-[#3A3A3A] px-3 py-2 rounded-lg w-full text-sm focus:outline-none focus:ring-1 focus:ring-accent"
          value={form.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
      </div>

      {/* Discount & Type */}
      <div className="flex gap-2 items-center">
        <input
          type="number"
          min={1}
          max={100}
          className="bg-[#2A2A2A] border border-[#3A3A3A] px-3 py-2 rounded-lg w-24 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
          value={form.discount}
          onChange={(e) => handleChange("discount", e.target.value)}
        />
        <select
          className="bg-[#2A2A2A] border border-[#3A3A3A] px-3 py-2 rounded-lg text-sm focus:outline-none"
          value={form.type}
          onChange={(e) => handleChange("type", e.target.value)}
        >
          <option value="Percentage">Percentage</option>
        </select>
      </div>

      {/* Botones */}
      <div className="flex justify-end gap-2 pt-2">
        <button className="text-sm px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition">
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="bg-[#24D1A4] hover:bg-[#1cc198] text-sm px-4 py-2 rounded-lg font-medium transition"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default DiscountForm;
