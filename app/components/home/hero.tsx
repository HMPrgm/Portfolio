'use client'
import {ReactTyped} from 'react-typed'; 
import Dots from '../partials/dots';

export default function Hero() {


  return (
    <section id="home" className="items-center text-center bw-text font-playfairDisplay flex flex-col gap-12 min-h-screen justify-center ">
      {/* <Dots></Dots> */}
      <h2 className="text-8xl font-bold typewriter">
      <ReactTyped strings={['Hi, I\'m Henry']} typeSpeed={100} cursorChar=''/>
      </h2>
      <h3 className="text-4xl min-h-10">
      <ReactTyped strings={['A CS student at UVA', 'A Full-Stack Developer', 'An AI Engineer']} typeSpeed={100} backSpeed={50} startDelay={3000} backDelay={1000} cursorChar='' loop/>
        
      </h3>
      <div></div>
    </section>
  )
}
