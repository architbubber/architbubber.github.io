export default function ExperienceItem({ company, date, bullets = [] }) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <div className="font-medium">{company}</div>
        <div className="text-sm text-slate-500">{date}</div>
      </div>
      <ul className="text-sm text-slate-600 mt-2 list-disc list-inside space-y-1">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  );
}
