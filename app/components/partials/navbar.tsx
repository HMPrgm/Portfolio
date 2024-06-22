'use client';
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <nav className="container  items-center flex mx-auto justify-center font-josefinSans">
            <div className="mt-32 flex justify-center fixed bw-text py-3 px-4 rounded-full link-container font-bold text-lg gap-8">
                <Link href={""} className="selected">Home</Link>
                <Link href={""}>Projects</Link>
                <Link href={""}>About</Link>
                <Link href={""}>Contact</Link>
            </div>
        </nav>
    )
}
