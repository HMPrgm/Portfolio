'use client'
import { useEffect, useState } from "react"
import { randomInt } from "crypto"

export default function dots({seed}:{seed:number}) {

  const [position, setPosition] = useState({
    x: 0,
    y:0
  })

  

  function handleMotion() {
    // console.log(Date.now())
    setPosition((pPos) => ({
      x: ((Date.now())/10 *Math.cos(seed))%window.innerWidth,
      y: ((Date.now())/10 *Math.sin(seed))%window.innerHeight
    }
    ))
  }

  useEffect(() => {
    handleMotion()
    // window.addEventListener('scroll', handleMotion);
    // return () => {
    //     window.removeEventListener('scroll', handleMotion);
    // };
});//, []

  return (
    <div className={`w-2 h-2 bg-Cmain rounded-full absolute  left-0 top-0 -z-10`}
      style={{ transform: `translate(${position.x}px, ${position.y}px)`}}></div>

  )
  // transform translate-x-[${position.x}px] translate-y-[${position.y}px]
}
