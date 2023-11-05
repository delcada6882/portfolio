import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
import "./cursor.scss";

function Cursor() {
  //   const [MousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  //   console.log(MousePosition + "HAHAH");

  //   useEffect(() => {
  //     const cursorMove = (e: MouseEvent) => {
  //       setMousePosition({
  //         x: e.clientX,
  //         y: e.clientY,
  //       });
  //     };

  //     document.addEventListener("mousemove", cursorMove);

  //     return () => {
  //       document.removeEventListener("mousemove", cursorMove);
  //     };
  //   });

  //   const variants = {
  //     default: {
  //       x: MousePosition.x - 100,
  //       y: MousePosition.y - 100,
  //     },
  //   };

  const useMousePosition = () => {
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

    return mousePosition;
  };

  const mousePosition = useMousePosition();

  return (
    <div className="cursor">
      {/* <motion.div
        className="cursor__inner"
        variants={variants}
        animate="default"
      ></motion.div> */}
      <div
        className="cursor__inner"
        style={{ translate: `${mousePosition.x}px, ${mousePosition.y}px` }}
      ></div>
      <p>{JSON.stringify(mousePosition)}</p>
    </div>
  );
}

export default Cursor;
