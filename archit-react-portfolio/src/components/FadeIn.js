import React, {useState, useEffect} from "react";

/**
 * FadeIn
 * Wrap any element to animate its entrance with a subtle fade + upward motion.
 * Props:
 *  - delay (ms) optional (number)
 *  - className optional
 */
export default function FadeIn({ children, delay = 0, className = "" }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div className={`${className} transition-all duration-700 ease-in-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
      {children}
    </div>
  );
}
