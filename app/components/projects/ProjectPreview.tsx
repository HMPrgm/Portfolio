import Link from "next/link"

export default function ProjectPreview({title, desc, link}:{title:string, desc:string, link:string}) {


  return (
    <div className="grid grid-cols-2  p-12 bg-Cdarkmain text-Cwhite container items-center mx-auto lg:w-[50rem] my-10 hover:lg:w-[55rem] hover:py-16 hover:bg-Cmain transition-all duration-500 ease-out">
      <div className="text-left flex flex-col gap-3">
        <h3 className="text-3xl font-playfairDisplay">{title}</h3>
        <p>{desc}</p>
        <button className="border-solid border-2 border-Cwhite py-2 px-4 text-center max-w-40 hover:bg-Cwhite hover:text-Cblack transition duration-500 ease-out">
          <Link href={link}>More Details</Link>
        </button>
      </div>
    </div>
  )
}
