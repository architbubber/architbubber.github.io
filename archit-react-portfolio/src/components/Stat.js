import React from "react";
import FadeIn from "./FadeIn";

export default function Stat({ label, value, delay = 0 }) {
  return (
    <FadeIn delay={delay} className="bg-slate-50 border border-slate-100 p-3 rounded-lg">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="font-medium mt-1">{value}</div>
    </FadeIn>
  );
}
