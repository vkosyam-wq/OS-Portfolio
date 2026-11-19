import { useState, useRef } from "react";

export const Newer = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const dragRef = useRef(null);
  const containerRef = useRef(null);

  const handlePointerDown = (e) => {
    // Only respond to right mouse button
    if (e.button !== 2) return;

    e.preventDefault();

    const rect = e.currentTarget.getBoundingClientRect();

    dragRef.current = {
      pointerId: e.pointerId,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top
    };

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!dragRef.current) return;
    if (dragRef.current.pointerId !== e.pointerId) return;

    const container = containerRef.current.getBoundingClientRect();

    setPosition({
      x: e.clientX - container.left - dragRef.current.offsetX,
      y: e.clientY - container.top - dragRef.current.offsetY
    });
  };

  const stopDragging = () => {
    dragRef.current = null;
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "500px",
        height: "300px",
        border: "1px solid gray"
      }}
    >
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        onContextMenu={(e) => e.preventDefault()}
        style={{
          position: "absolute",
          left: position.x,
          top: position.y,
          width: "80px",
          height: "80px",
          background: "#3DAEE9",
          cursor: "grab",
          touchAction: "none",
          userSelect: "none"
        }}
      >
        Drag me
      </div>
    </div>
  );
};
