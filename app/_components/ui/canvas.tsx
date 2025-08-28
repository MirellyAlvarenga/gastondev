"use client"
import React, { useRef, useEffect, useState } from "react";

const useMousePosition = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!canvasRef.current) return;

      const rect = canvasRef.current.getBoundingClientRect();
      const x = ev.clientX - rect.left;
      const y = ev.clientY - rect.top;

      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [canvasRef]);

  return mousePosition;
};

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { x: mouseX, y: mouseY } = useMousePosition(canvasRef);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = canvas.parentElement?.clientWidth || 400;
      canvas.height = 400;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let animationFrameId: number;

    const draw = () => {
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      const numRows = 6;
      const numCols = 24;
      const spacingX = width / numCols;
      const spacingY = height / numRows;

      for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
          const x = col * spacingX + spacingX / 2;
          const y = row * spacingY + spacingY / 2;

          const dx = mouseX - x;
          const dy = mouseY - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxRadius = Math.min(spacingX, spacingY) / 1.5;
          const minRadius = 6;
          const force = Math.exp(-dist * 0.02) * maxRadius;
          const radius = Math.max(minRadius, force);

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = "white";
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [mouseX, mouseY]);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", width: "100%", height: "400px", background: "black" }}
    />
  );
};

export default Canvas;
