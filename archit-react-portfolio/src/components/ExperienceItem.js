import React from "react";
import FadeIn from "./FadeIn";

export default function ExperienceItem({ company, date, bullets = [], delay = 0 }) {
  return (
    <FadeIn delay={delay} className="mb-4">
      <div className="flex items-center justify-between">
        <div className="font-medium">{company}</div>
        <div className="text-sm text-slate-500">{date}</div>
      </div>
      <ul className="text-sm text-slate-600 mt-2 list-disc list-inside space-y-1">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </FadeIn>
  );
}
