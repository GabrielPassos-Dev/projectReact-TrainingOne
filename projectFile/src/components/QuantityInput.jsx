import { CircleMinus, CirclePlus } from "lucide-react";
import { Button } from "./ui/buttons/Button";

function QuantityInput({ value, onChange }) {
  const addQt = () => {
    const newValue = value + 1;
    if (newValue > 999) return;
    onChange?.(newValue);
  };

  const removeQt = () => {
    const newValue = value - 1;
    if (newValue < 1) return;
    onChange?.(newValue);
  };

  const handleChange = (event) => {
    const value = Number(event.target.value);
    if (value < 1 || value > 999) return;
    onChange?.(value);
  };

  return (
    <div className="flex flex-row gap-4 ">
      {value > 1 && (
        <Button onClick={removeQt} variant="light" size="md" type="button" aria-label="Aumentar quantidade">
          <CircleMinus />
        </Button>
      )}

      <input
        className="w-20 px-1 py-2.5 text-center   font-semibold text-lg bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        type="number"
        min="1"
        max="999"
        inputMode="numeric"
        pattern="[0-9]*"
        value={value}
        onChange={handleChange}
      />

      <Button onClick={addQt} variant="light" size="md" type="button" aria-label="Diminuir quantidade">
        <CirclePlus />
      </Button>
    </div>
  );
}

export default QuantityInput;
