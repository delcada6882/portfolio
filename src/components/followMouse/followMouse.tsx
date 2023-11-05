import { useEffect, useState } from "react";
import "./followMouse.scss";

const FollowMouse = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      className="cursor__inner"
      style={{
        position: "fixed",
        top: mousePosition.y - 150,
        left: mousePosition.x - 150,
      }}
    >
      {/* Your component goes here */}
    </div>
  );
};

export default FollowMouse;
