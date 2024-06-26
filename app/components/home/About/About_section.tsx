import Reveal from "../../partials/effects/revealonscroll";

export default function AboutSection({ children, title, text, left }: {children: React.ReactNode, title: string, text: string, left: boolean }) {

  // const title:string = "I’m studying Computer Science at the University of Virginia";
  // const text:string = "Studying CS through UVA Engineering along with a Math major. Aside from those, my other interests include: history, language learning (German currently), reading, and exercising!"
  // const left:boolean = false;

  return (
    <div className="px-6  md:px-4 lg:px-2 xl:px-0 py-10 container mx-auto lg:w-[70rem] sm:w-[50rem] flex flex-col gap-16">
      <div className="grid sm:grid-cols-2 gap-10 items-center">
        <Reveal translate="-translate-x-20" className={`order-last ${left ? "" : "sm:order-first"} flex justify-center`}>
          
            {/* <img src={photos[0]} alt={title} className="max-h-80 rounded-t-full bg-Cwhite " /> */}
          {children}
        </Reveal>
        <Reveal translate="translate-x-20">
          <div className="flex flex-col gap-2 text-left">
            <h3 className="font-playfairDisplay text-3xl">{title}</h3>
            <p className="[&>a]:text-Cmain [&>a]:dark:text-Clightmain  [&>a]:dark:font-medium [&>a]:underline" dangerouslySetInnerHTML={{ __html: text }}/>
          </div>
        </Reveal>
      </div>
      <Reveal>
        <hr className="h-0.25 border-Cdarkmain dark:border-Clightmain" />
      </Reveal>
    </div>
  )
}
