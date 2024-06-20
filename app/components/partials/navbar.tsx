'use client';
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">Portfolio</div>
                <div className="relative">
                    <button
                        onClick={toggleMenu}
                        className="text-white px-4 py-2 rounded-md focus:outline-none"
                    >
                        Menu
                    </button>
                    {menuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                            <a
                                href="#"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                            >
                                Link 1
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                            >
                                Link 2
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                            >
                                Link 3
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}
