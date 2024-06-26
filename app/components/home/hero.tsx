'use client'
import Dots from '../partials/dots/dots';

export default function Hero() {

  const nums: number[] = []
  for (let i: number = 0; i < 200; i++) {
    nums.push(i);
  }

  //TODO Remove Absolute
  return (
    <section id="home" className="items-center text-center bw-text font-playfairDisplay flex flex-col gap-12 pt-32 pb-10 sm:pb-0 sm:pt-0 sm:min-h-screen justify-center relative -z-20 overflow-x-clip">
      <Dots></Dots>
      <h2 className="text-5xl sm:text-8xl font-bold">
        Hi, I'm Henry
      </h2>
      <h3 className="text-2xl sm:text-4xl min-h-10 max-w-[40vw]">A CS student, A Full-Stack Developer, and Much More...

      </h3>
      <div></div>
    </section>
  )
}
