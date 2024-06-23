import Link from "next/link"

export default function ProjectPreview() {

  const projectName:string = "Groceries Online"
  const projectDescription:string = "An online store that simulaties a grocery store"
  const projectLink:string = "/projects/groceries-online"

  return (
    <div className="grid grid-cols-2  p-12 bg-Cdarkmain text-Cwhite container items-center mx-auto lg:w-[50rem] sm:w-[30rem] my-10">
      <div className="text-left flex flex-col gap-3">
        <h3 className="text-3xl font-playfairDisplay">{projectName}</h3>
        <p>{projectDescription}</p>
        <button className="border-solid border-2 border-Cwhite py-2 px-4 text-center max-w-40 hover:bg-Cwhite hover:text-Cblack transition duration-300 ease-out">
          <Link href={projectLink}>More Details</Link>
        </button>
      </div>
    </div>
  )
}
