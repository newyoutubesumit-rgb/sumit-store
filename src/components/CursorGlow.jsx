import { useEffect, useState } from "react";

function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: pos.x - 120,
        top: pos.y - 120,
        width: 240,
        height: 240,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(212,175,55,.18), transparent 70%)",
        pointerEvents: "none",
        zIndex: 1,
        transition: "left .08s linear, top .08s linear",
      }}
    />
  );
}

export default CursorGlow;