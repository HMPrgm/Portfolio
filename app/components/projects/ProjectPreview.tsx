import Link from "next/link"
import { Project } from "../home/Projects/project"

export default function ProjectPreview({project}:{project:Project}) {


  return (
    <div className="p-12 mb-10 bg-Cdarkmain text-Cwhite mx-10 hover:bg-Cmain transition-all duration-500 ease-out">
      <div className="text-left flex flex-col gap-3">
        <h3 className="text-3xl font-playfairDisplay">{project.title}</h3>
        <p>{project.desc}</p>
        <button className="border-solid border-2 border-Cwhite py-2 px-4 text-center max-w-40 hover:bg-Cwhite hover:text-Cblack transition duration-500 ease-out">
          <Link href={project.link} target="_blank">More Details</Link>
        </button>
      </div>
    </div>
  )
}
