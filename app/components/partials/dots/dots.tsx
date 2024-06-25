'use client'
import { useEffect, useRef, useState } from "react"
import { NewDot } from "./dot"
import { DotObj, MousePos } from "./dotObj";

export default function Dots() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event: MouseEvent) => {
    console.log(mousePosition)
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const dotObjs: DotObj[] = []

  useEffect(() => {
    for (let i: number = 0; i < 100; i++) {
      dotObjs.push({
        x: Math.random() * window.innerWidth * 2,
        y: Math.random() * window.innerHeight * 2,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        radius: 7
      })
    }
    const render = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.width = window.innerWidth * 2;
      canvas.height = window.innerHeight * 2;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      const context = canvas.getContext('2d');
      if (!context) return;
      dotObjs.forEach(dotObj => {
        NewDot(canvas.width, canvas.height,context, dotObj,mousePosition);
      });

      requestAnimationFrame(render)
    }
    render();
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [])
  return (
    <div className="absolute -z-10">
      <canvas ref={canvasRef} width={800} height={600} className="border border-gray-300"></canvas>
    </div>
  );
}
