'use client';
import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
    { id: 'home', name: 'Home', href: '#home' },
    { id: 'projects', name: 'Projects', href: '#projects' },
    { id: 'about', name: 'About', href: '#about' },
    { id: 'contact', name: 'Contact', href: '#contact' },
];

export default function Navbar() {

    const minScroll: number = 150;

    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>('');
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > minScroll) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        const sectionElements = sections.map(section => document.getElementById(section.id));
        const currentSection = sectionElements.find(section => {
            if (section) {
                const rect = section.getBoundingClientRect();
                // console.log(rect.top, rect.bottom)
                return rect.top <= 0 && rect.bottom > 0;
            }
            return false;
        });
        if (currentSection) {
            setActiveSection(currentSection.id);
        }
    };


    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="container items-center flex mx-auto justify-center">
            <div className={`flex justify-center fixed px-4 rounded-full nav-links font-bold text-lg bw-text bg-white  duration-500 ease-out ${isScrolled ? 'bg-opacity-75 mt-24 gap-4 py-2' : 'bg-opacity-0 mt-32 gap-8 py-3 '} drop-shadow-sm `}>

                {sections.map(section => <Link href={section.href} key={section.id} className={`transition-all selected hover:text-Cmain ${activeSection === section.id ? 'bg-opacity-100' : 'bg-opacity-0'}`} >{section.name}</Link>)}
            </div>
        </nav>
    )
}
