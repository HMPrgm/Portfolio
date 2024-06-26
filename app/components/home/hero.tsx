'use client'
import Dots from '../partials/dots/dots';

export default function Hero() {

  const nums: number[] = []
  for (let i: number = 0; i < 200; i++) {
    nums.push(i);
  }

  //TODO Remove Absolute
  return (
    <section id="home" className="items-center text-center bw-text font-playfairDisplay flex flex-col gap-12 min-h-screen justify-center relative -z-20 overflow-x-clip">
      <Dots></Dots>
      <h2 className="text-8xl font-bold">
        Hi, I'm Henry
      </h2>
      <h3 className="text-4xl min-h-10">A CS student at UVA

      </h3>
      <div></div>
    </section>
  )
}
