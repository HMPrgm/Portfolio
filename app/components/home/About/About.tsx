import About_section from "./About_section";

interface Section{
  title:string;
  text:string;
  left:boolean;
  photo:string;
}

export default function About() {

  const sections = [
        {
            title:"I'm studying Computer Science at the University of Virginia",
            text:"Studying CS through UVA Engineering along with a Math major. Aside from those, my other interests include: history, language learning (German currently), reading, and exercising!",
            left: false,
            photo:'Photo_Cropped.png'
        },
        {
            title:"I'm a Full-Stack Web Developer",
            text:"Working in teams or alone, I'm passionate about all things web. The technology I'm most interested in at the moment is Next.js. The combination of creativity and problem solving drives my excitement for web dev.",
            left:true,
            photo:''
        }
    ]

  return (
    <section id="about" className="bw-text flex flex-col justify-center text-center py-10">
        <h2 className="font-playfairDisplay text-5xl pb-10">Who Am I?</h2>
        {sections.map(s=> <About_section title={s.title} text={s.text} left={s.left} photo={s.photo}></About_section>)}
    </section>
  )
}
