'use client'
import { useEffect, useRef, useState } from "react"
import { NewDot } from "./dot"
import { DotObj, MousePos } from "./dotObj";

export default function Dots() {

  const dotsPer10000Pixels = 1.5;

  const mousePositionRef = useRef({ x: 0, y: 0 });
  const [resize,setResize] = useState(false)
  const handleResize = (event: Event) => {
    setResize(!resize);
  }
  const handleMouseMove = (event: MouseEvent) => {
    const newMousePosition = {
      x: event.clientX * 2,
      y: (event.clientY  + scrollY)* 2,
    };
    // console.log(`Old: (${ event.clientX*2}, ${ event.clientY*2})`)
    // console.log(`New: (${ newMousePosition.x}, ${newMousePosition.y})`)
    mousePositionRef.current = newMousePosition;
  };

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const dotObjs: DotObj[] = []
  useEffect(() => {
    const dots = dotsPer10000Pixels*window.innerWidth*window.innerHeight/10000
    console.log(dots)
    for (let i: number = 0; i < dots; i++) {
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
        NewDot(canvas.width, canvas.height,context, dotObj,mousePositionRef.current);
      });

      requestAnimationFrame(render)
    }
    render();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [resize])
  return (
    <div className="absolute -z-10">
      <canvas ref={canvasRef} width={800} height={600} className="border border-gray-300"></canvas>
    </div>
  );
}


