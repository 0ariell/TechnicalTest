import { useState } from "react";
import { Trash2 } from "lucide-react";

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
    <div className="bg-cards border border-borderCard text-white p-4 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-3">Discount Code</h3>

      <div className="space-y-3">
        {/* Code + Botón Active/Inactive */}
        <div>
          <label className="block text-sm mb-1">Code</label>
          <div className="flex gap-2 items-center">
            <input
              type="text"
              className="bg-borderCard px-3 py-2 rounded w-full text-sm"
              value={form.code}
              onChange={(e) => handleChange("code", e.target.value)}
            />
            <button
              onClick={toggleActive}
              className="flex items-center gap-2 px-3 py-2 rounded border border-white/20 hover:bg-white/5 transition"
            >
              <span
                className={`w-3 h-3 rounded-full ${
                  form.active ? "bg-green-500" : "bg-red-500"
                }`}
              ></span>
              <span className="text-sm font-medium text-white">
                {form.active ? "Active" : "Inactive"}
              </span>
            </button>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm mb-1">Description</label>
          <input
            type="text"
            className="bg-borderCard px-3 py-2 rounded w-full text-sm"
            value={form.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>

        {/* Discount + Type */}
        <div className="flex gap-2 items-center">
          <input
            type="number"
            min={1}
            max={100}
            className="bg-borderCard px-3 py-2 rounded w-20 text-sm"
            value={form.discount}
            onChange={(e) => handleChange("discount", e.target.value)}
          />
          <select
            className="bg-borderCard px-2 py-2 rounded text-sm"
            value={form.type}
            onChange={(e) => handleChange("type", e.target.value)}
          >
            <option value="Percentage">Percentage</option>
          </select>
        </div>

        {/* Botones de acción */}
        <div className="flex justify-end gap-2 pt-3">
          <button className="bg-[#2A2A2A] text-white text-sm px-4 py-2 rounded">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-accent text-white text-sm px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountForm;
