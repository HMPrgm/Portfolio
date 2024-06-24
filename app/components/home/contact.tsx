"use client"
import { useState } from "react"

export default function Contact() {

    const [formData, setFormData] = useState<{
        name: string;
        email: string;
        message: string
    }>({ name: "", email: "", message: "" });

    return (
        <div className="bg-Cwhite py-10">
            <div className="container mx-auto items-center text-center ">
                <h2 className="font-playfairDisplay text-5xl  text-Cblack">Let's Talk!</h2>
                <form action="/email" method="POST">
                    <div>
                        <label htmlFor="name"> Name
                            <input type="text" name="name" id="name" />
                        </label>
                        <label htmlFor="name"> Email
                            <input type="email" name="email" id="email" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="message">Message
                            <textarea name="message" id="message" cols={5}></textarea>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    )
}
