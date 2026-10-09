import { useEffect, useState } from "react";
import "./Meteors.css";

export default function Meteors({
  number = 18,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 3,
  maxDuration = 9,
  angle = 215,
  paused = false,
  className = "",
}) {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setMeteors([]);
      return;
    }
    const width = window.innerWidth;
    const count = width < 640 ? Math.ceil(number / 2) : number;
    // Map Cartesian 215deg to CSS rotated angle -35deg so translateX(-dist) streaks from upper-right to lower-left
    const rotationAngle = -(angle - 180);

    setMeteors(
      Array.from({ length: count }, () => ({
        top: `${Math.floor(Math.random() * 55)}%`,
        left: `${Math.floor(Math.random() * (width + 300) - 50)}px`,
        delay: Number((Math.random() * (maxDelay - minDelay) + minDelay).toFixed(2)),
        duration: Math.floor(Math.random() * (maxDuration - minDuration) + minDuration),
        angle: rotationAngle,
      }))
    );
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

  return (
    <div className={`meteors ${paused ? "is-paused" : ""} ${className}`.trim()} aria-hidden="true">
      {meteors.map((m, i) => (
        <span
          key={i}
          className="meteor"
          style={{
            top: m.top,
            left: m.left,
            transform: `rotate(${m.angle}deg)`,
          }}
        >
          <span
            className="meteor-streak"
            style={{
              animationDelay: `${m.delay}s`,
              animationDuration: `${m.duration}s`,
            }}
          >
            <i className="meteor-head" />
            <i className="meteor-tail" />
          </span>
        </span>
      ))}
    </div>
  );
}
