import Reveal from "../../partials/effects/revealonscroll";

export default function About_section({ children, title, text, left, photos }: {children: React.ReactNode, title: string, text: string, left: boolean, photos: string[] }) {

  // const title:string = "I’m studying Computer Science at the University of Virginia";
  // const text:string = "Studying CS through UVA Engineering along with a Math major. Aside from those, my other interests include: history, language learning (German currently), reading, and exercising!"
  // const left:boolean = false;

  function images() {
    return photos.map(photo => { <img src="photo" alt="Tech Photo"></img> })
  }

  return (
    <div className="py-10 container mx-auto lg:w-[70rem] sm:w-[50rem] flex flex-col gap-16">
      <div className="grid grid-cols-2 gap-10 items-center">
        <Reveal translate="-translate-x-20" className={`${left ? "order-last" : ""} flex justify-center`}>
          
            {/* <img src={photos[0]} alt={title} className="max-h-80 rounded-t-full bg-Cwhite " /> */}
          {children}
        </Reveal>
        <Reveal translate="translate-x-20">
          <div className="flex flex-col gap-2 text-left">
            <h3 className="font-playfairDisplay text-3xl">{title}</h3>
            <p>{text}</p>
          </div>
        </Reveal>
      </div>
      <hr className="h-0.25 border-Cdarkmain" />
    </div>
  )
}
