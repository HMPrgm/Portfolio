'use client'
import Dots from '../partials/dots/dots';

export default function Hero() {

  const nums: number[] = []
  for (let i: number = 0; i < 200; i++) {
    nums.push(i);
  }

  //TODO Remove Absolute
  return (
    <section id="home" className="items-center text-center bw-text font-playfairDisplay flex flex-col gap-12 justify-center relative -z-20 overflow-x-clip py-10">
      <h2 className="text-8xl font-bold typewriter">
        Projects
      </h2>

    </section>
  )
}
