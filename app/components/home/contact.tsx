"use client"
import { useState } from "react"
import Reveal from "../partials/effects/revealonscroll";

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}\nThe email you entered was: ${email}\nThe message you entered was: ${message}`)
      }


    return (
        <div  id="contact"  className="bg-Cwhite py-20 xl:pb-40 text-Cblack">
            <div className="container mx-auto items-center text-center ">
                <div className="container items-center mx-auto max-w-96 gap-12 [&>*]:py-4">
                    <Reveal>
                        <h2 className="font-playfairDisplay text-5xl text-Cblack">Let's Talk!</h2>
                    </Reveal>
                    <Reveal>
                        <p className="text-xl">Have a question or just want to talk? Feel free to shoot me a message!</p>
                    </Reveal>
                </div>
                <div className="mb-10 mt-6 max-w-[60em] container items-center mx-auto">
                    <form onSubmit={handleSubmit} className="xl:pt-20 grid grid-cols-2 gap-12 [&>*]:flex [&>*]:flex-col text-left text-xl">
                            <Reveal className="">
                                <label htmlFor="name" className="">Name</label>
                                <input type="name" name="name" id="name"
                                className="outline-none focus:text-[1.3rem] transition-all duration-500 ease-out bg-Cwhite border-b-Cblack border-b-2 py-1 peer" 
                                placeholder="Enter your name"
                                onChange={(e) => setName(e.target.value)}></input>
                            </Reveal>
                            <Reveal>
                                <label htmlFor="email" >Email</label>
                                <input type="email" name="email" id="email" placeholder="Enter your email address" 
                                className=" transition-all duration-500 ease-out outline-none bg-Cwhite border-b-Cblack border-b-2 py-1 focus:text-[1.3rem]"
                                onChange={(e) => setEmail(e.target.value)}></input>
                            </Reveal>
                            <Reveal className="col-span-2">
                                <label htmlFor="message" className="">Message</label>
                                <textarea name="message" id="message" className="transition-all duration-500 ease-out outline-none h-18 overflow-auto resize-none bg-Cwhite border-b-Cblack border-b-2 py-1.5 focus:text-[1.275rem]" placeholder="Hi Henry, I was just curious about your X project and was wondering if you could tell me more about how you implemented..."
                                onChange={(e) => setMessage(e.target.value)}></textarea>
                            </Reveal>
                            <Reveal className="col-span-2 items-center">
                                <input type="submit" value="Send Message" className="border-2 border-Cblack w-44 text-center py-2 hover:text-Cwhite hover:bg-Cblack transition-all duration-500 hover:cursor-pointer" />
                            </Reveal>
                    </form>
                </div>
            </div>
        </div>
    )
}
