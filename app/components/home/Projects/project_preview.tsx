import Link from "next/link"
import { Project } from "./project"

export default function ProjectPreview({ photo='', project }: { photo?:string, project: Project }) {


  return (
    <div className="grid  p-12 bg-Cdarkmain text-Cwhite container items-center mx-auto lg:w-[50rem] my-10 hover:lg:w-[55rem] hover:py-16 hover:bg-Cmain transition-all duration-500 ease-out group">
      <div className="text-center flex flex-col gap-3 items-center justify-center">
        <h3 className="text-3xl  transition-all duration-500 ease-out font-playfairDisplay">{project.title}</h3>
        <p className="pb-2">{project.desc}</p>
        <button className="">
          <Link href={project.link} target="_blank" className="text-center hover:bg-Cwhite hover:text-Cblack transition-all duration-500 ease-out py-3 px-6 max-w-40 border-solid border-2 border-Cwhite  ">More Details</Link>
        </button>
      </div>
    </div>
  )
}
