import Reveal from "../../partials/effects/revealonscroll";
import About_section from "./About_section";

interface Section{
  title:string;
  text:string;
  left:boolean;
  photos:string[];
}

export default function About() {

  const sections:Section[] = [
        {
            title:"I'm studying Computer Science at the University of Virginia",
            text:"Studying CS through UVA Engineering along with a Math major. Aside from those, my other interests include: history, language learning (German currently), reading, and exercising!",
            left: false,
            photos:['Photo_Cropped.png']
        },
        {
            title:"I'm a Full-Stack Web Developer",
            text:"Working in teams or alone, I'm passionate about all things web. The technology I'm most interested in at the moment is Next.js. The combination of creativity and problem solving drives my excitement for web dev.",
            left:true,
            photos:['./technology_photos/Angular.png','./technology_photos/React.png','./technology_photos/Nextjs.png','./technology_photos/Git.png','./technology_photos/Htmlcss.png','./technology_photos/Tailwind.png','./technology_photos/Javascript.png','./technology_photos/Typescript.png','./technology_photos/Expressjs.png','./technology_photos/Nodejs.png','./technology_photos/Mongodb.png']
        }
    ]

  return (
    <section id="about" className="bw-text flex flex-col justify-center text-center py-10">

        <Reveal>
          <h2 className="font-playfairDisplay text-5xl pb-10">Who Am I?</h2>
        </Reveal>

        {sections.map(s=> <About_section title={s.title} text={s.text} left={s.left} photos={s.photos}></About_section>)}
    </section>
  )
}
