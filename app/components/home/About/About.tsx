import Reveal from "../../partials/effects/revealonscroll";
import AboutSection from "./About_section";
import TechStacks from "./techStacks";
import { TechStackInterface } from "./techStacksInter";
export default function About() {

  const sections:any = {
        personal:{
            title:"I'm studying Computer Science at the University of Virginia",
            text:"Studying CS through UVA Engineering along with a Math major. Aside from those, my other interests include: history, language learning (German currently), reading, and exercising!",
            left: false,
            photo:'Photo_Cropped.png'
        },
        webdev:{
            title:"I'm a Full-Stack Web Developer",
            text:"Working in teams or alone, I'm passionate about all things web. The combination of creativity and problem solving is what peaks my interest. The frontend technology I'm most interested in at the moment is Next.js, and on the backend I'm working on learning ASP.NET.",
            left:true,
            techs:
            [
              {
                name:'Angular',
                photo:'./technology_photos/Angular.png'
              },
              {
                name:'React',
                photo:'./technology_photos/React.png'
              },
              {
                name:'Next.JS',
                photo:'./technology_photos/Nextjs.png'
              },
              {
                name: 'HTML CSS',
                photo:'./technology_photos/Htmlcss.png'
              },
              {
                name: 'Tailwind',
                photo:'./technology_photos/Tailwind.png'
              },
              {
                name: 'Javascript',
                photo:'./technology_photos/Javascript.png'
              },
              {
                name:'Typescript',
                photo:'./technology_photos/Typescript.png'
              },
              {
                name:'Express.JS',
                photo:'./technology_photos/Expressjs.png'
              },
              {
                name:'Node.JS',
                photo:'./technology_photos/Nodejs.png'
              },
              {
                name:'Mongo DB',
                photo:'./technology_photos/Mongodb.png'
              },
              {
                name: 'Git',
                photo:'./technology_photos/Git.png'
              },
            ]
        },
        other:{
          title:"I Have a Passion for Everything CS",
          text:"I've used a lot of different technologies throughout my CS career. I started in 2019 making games with Unity and C#, afterwards learning Python and Java. I've learned a lot of .NET and have recently been delving into Deep Learning. Of course this list is incomplete as my drive to learn only increases.",
          left:false,
          techs:
          [
            {
              name:'Unity',
              photo:'./technology_photos/Unity.png'
            },
            {
              name:'C#',
              photo:'./technology_photos/CSharp.png'
            },
            {
              name: '.NET',
              photo:'./technology_photos/Dotnet.png'
            },
            {
              name:'Java',
              photo:'./technology_photos/Java.png'
            },
            {
              name: 'Python',
              photo:'./technology_photos/Python.png'
            },
            {
              name: 'PyTorch',
              photo:'./technology_photos/Pytorch.png'
            },
          ]
      }
      }

  return (
    <section id="about" className="bw-text flex flex-col justify-center text-center py-10">

        <Reveal>
          <h2 className="font-playfairDisplay text-5xl pb-10">Who Am I?</h2>
        </Reveal>
        {/* Personal About Section */}
        <AboutSection 
        key={sections.personal.title} 
        title={sections.personal.title} 
        text={sections.personal.text} 
        left={sections.personal.left}>

          <img src={sections.personal.photo} alt={sections.personal.title} className="max-h-80 rounded-t-full bg-Cwhite " />
        </AboutSection>
        {/* Web Dev Section */}
        <AboutSection 
        key={sections.title} 
        title={sections.webdev.title} 
        text={sections.webdev.text} 
        left={sections.webdev.left}>
          
          <TechStacks techs={sections.webdev.techs}></TechStacks>
        </AboutSection>
        {/* Other Section */}
        <AboutSection 
        key={sections.other.title} 
        title={sections.other.title} 
        text={sections.other.text} 
        left={sections.other.left}>
          
          <TechStacks techs={sections.other.techs}></TechStacks>
        </AboutSection>
        
    </section>
  )
}
