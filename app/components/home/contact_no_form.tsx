import { useRef, useState } from "react"
import Reveal from "../partials/effects/revealonscroll";
import Link from "next/link";

export default function ContactNoForm() {


    return (
        <section id="contact" className="bw-extreme-text py-20 xl:pb-40 ">
            <div  className="container mx-auto items-center text-center ">
                <div className="container items-center mx-auto max-w-96 gap-12 [&>*]:py-4">
                    <Reveal>
                        <h2 className="font-playfairDisplay text-5xl ">Let Me Know How I Can Help!</h2>
                    </Reveal>
                    <Reveal>
                        <p className="text-xl">Have a question or just want to talk? Feel free to shoot me a message!</p>
                    </Reveal>              
                    <Reveal className="text-xl">
                        Email: <Link href="mailto:henrymprof@gmail.com" target="_blank" className="text-Cmain dark:text-blue-100 underline hover:text-[1.3rem] transition-all duration-300">henrymprof@gmail.com</Link>    
                    </Reveal>  
                </div>
            </div>
        </section>
    )
}
