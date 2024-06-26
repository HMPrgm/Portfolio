"use client"
import { useRef, useState } from "react"
import Reveal from "../partials/effects/revealonscroll";
import emailjs from 'emailjs-com'

export default function Contact() {

    const form = useRef<HTMLFormElement>(null);
    const [messageSending, setMessageSening] = useState(false);
    const [messageSent, setMessageSent] = useState(false);

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setMessageSening(true);

        if (!process.env.NEXT_PUBLIC_YOUR_SERVICE_ID || !process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID || !form.current || !process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY) { return; }
        emailjs.sendForm(process.env.NEXT_PUBLIC_YOUR_SERVICE_ID, process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY)
            .then(
                () => {
                    setMessageSent(true);
                },
                (error) => {
                    console.log('FAILED...'+ error.text);
                },
            );
        
    }


    return (
        <div id="contact" className="bw-extreme-text py-20 xl:pb-40 ">
            <div className="container mx-auto items-center text-center ">
                <div className="container items-center mx-auto max-w-96 gap-12 [&>*]:py-4">
                    <Reveal>
                        <h2 className="font-playfairDisplay text-5xl ">Let's Talk!</h2>
                    </Reveal>
                    <Reveal>
                        <p className="text-xl">Have a question or just want to talk? Feel free to shoot me a message!</p>
                    </Reveal>
                </div>
                <div className="mb-10 mt-2 max-w-[60em] container items-center mx-auto">
                    <form ref={form} className={`xl:pt-20 grid grid-cols-2 gap-6 [&>*]:flex [&>*]:flex-col text-left text-xl mx-4 md:mx-0 ${messageSending ? 'hidden' : 'visible'}`}>
                        <Reveal className="col-span-2 md:col-span-1">
                            <label htmlFor="name" className="">Name</label>
                            <input type="name" name="name" id="name"
                                className="outline-none focus:text-[1.3rem] transition-all duration-500 ease-out bw-extreme-text dark:border-b-Cwhite border-b-Cblack border-b-2 py-1 peer"
                                placeholder="Enter your name"></input>
                        </Reveal>
                        <Reveal className="col-span-2 md:col-span-1">
                            <label htmlFor="email" >Email</label>
                            <input type="email" name="email" id="email" placeholder="Enter your email address"
                                className=" transition-all duration-500 ease-out outline-none bw-extreme-text dark:border-b-Cwhite border-b-Cblack border-b-2 py-1 focus:text-[1.3rem]"></input>
                        </Reveal>
                        <Reveal className="col-span-2">
                            <label htmlFor="message" className="">Message</label>
                            <textarea name="message" id="message" className="transition-all duration-500 ease-out outline-none h-18 overflow-auto resize-none bw-extreme-text dark:border-b-Cwhite border-b-Cblack border-b-2 py-1.5 focus:text-[1.275rem]" placeholder="Hi Henry, I was just curious about your X project and was wondering if you could tell me more about how you implemented..."></textarea>
                        </Reveal>
                        <Reveal className="col-span-2 items-center">
                            <button type="button" onClick={handleSubmit} className="border-2 border-Cblack dark:border-Cwhite w-44 text-center py-2 hover:text-Cwhite hover:bg-Cblack dark:hover:text-Cblack dark:hover:bg-Cwhite transition-all duration-500 hover:cursor-pointer">Send Message</button>
                        </Reveal>
                    </form>
                    <div className={` col-span-2 transition duration-1000 ${messageSent ? 'opacity-100' : 'opacity-0'}`}>
                        <p className="text-center text-xl text-Cmain dark:text-Clightmain">Message Sent!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
