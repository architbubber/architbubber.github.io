import React from "react";
import FadeIn from "./FadeIn";

export default function ProjectCard({ title, tech, body, cta, delay = 0 }) {
  return (
    <FadeIn delay={delay} className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-semibold">{title}</h4>
          <div className="text-xs text-slate-400 mt-1">{tech}</div>
        </div>
        <div className="text-xs text-slate-500">•</div>
      </div>
      <p className="text-sm text-slate-600 mt-3">{body}</p>
      <div className="mt-4">
        <a href="#" className="text-sm font-medium">{cta} →</a>
      </div>
    </FadeIn>
  );
}
