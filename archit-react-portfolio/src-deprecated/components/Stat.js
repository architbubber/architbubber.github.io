export default function Stat({ label, value }) {
  return (
    <div className="bg-slate-50 border border-slate-100 p-3 rounded-lg">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="font-medium mt-1">{value}</div>
    </div>
  );
}
