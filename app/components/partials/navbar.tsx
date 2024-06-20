import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="">
            <div className="flex  justify-between border-b-2 border-b-slate-800 border-opacity-75 ">
                <h1 className="font-bold text-3xl py-3">
                    <Link href="/" >Henry Morris</Link>
                </h1>
                <div className="py-3">
                    <Link href="/projects" >Projects</Link>
                </div>
            </div>
        </nav>
    )
}
