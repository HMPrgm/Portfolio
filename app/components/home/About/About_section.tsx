export default function About_section({ title, text, left}: {title:string, text:string, left:boolean}) {

  // const title:string = "I’m studying Computer Science at the University of Virginia";
  // const text:string = "Studying CS through UVA Engineering along with a Math major. Aside from those, my other interests include: history, language learning (German currently), reading, and exercising!"
  // const left:boolean = false;

  function leftFormat() {
    if (left) {
      return 
    }
  }

  return (
    <div className="py-10 container mx-auto lg:w-[70rem] sm:w-[50rem] flex flex-col gap-16">
      <div className="grid grid-cols-2 gap-10 ">
        <div className={`${left? "order-last":""}`}>
          
        </div>
        <div className="flex flex-col gap-2 text-left">
          <h3 className="font-playfairDisplay text-3xl">{title}</h3>
          <p>{text}</p>
        </div>
      </div>
      <hr className="h-0.25 bg-Cwhite"/>
    </div>
  )
}
