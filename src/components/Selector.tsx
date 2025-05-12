type SelectorProps = {
  label: string;
  options: string[];
  value: string;
  setValue: (value: string) => void;
};

export function Selector({ label, options, value, setValue }: SelectorProps) {
  return (
    <div className="text-left">
      <label className="block mb-1 font-semibold text-gray-700">{label}</label>
      <select
        className="w-full p-3 rounded-md border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="">-- Choose --</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt.charAt(0).toUpperCase() + opt.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}