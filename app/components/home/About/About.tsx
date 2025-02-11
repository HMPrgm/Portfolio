import Reveal from "../../partials/effects/revealonscroll";
import AboutSection from "./About_section";
import TechStacks from "./techStacks";
import { TechStackInterface } from "./techStacksInter";
export default function About() {

  const sections: any = {
    personal: {
      title: "I'm studying Computer Science at the University of Virginia",
      text: "I'm studying CS through UVA Engineering along with a Math major. I've been a TA for the Discrete Mathematics course at UVA for 2 semesters now, and love the experience. Teaching is incredibly enjoyable, and it's nice knowing the work I'm doing is helping others improve their grades.",
      left: false,
      photo: 'Photo_Cropped.png'
    },
    webdev: {
      title: "I'm a Full-Stack Web Developer",
      text: "Working in teams or alone, I'm passionate about all things web. The combination of creativity and problem-solving is what peaks my interest. The frontend technology I'm most interested in is Next.js, and on the backend, I'm working on learning ASP.NET.",
      left: true,
      techs:
        [
          {
            name: 'Angular',
            photo: './technology_photos/Angular.png'
          },
          {
            name: 'React',
            photo: './technology_photos/React.png'
          },
          {
            name: 'Next.JS',
            photo: './technology_photos/Nextjs.png'
          },
          {
            name: 'Tailwind',
            photo: './technology_photos/Tailwind.png'
          },
          {
            name: 'Typescript',
            photo: './technology_photos/Typescript.png'
          },
          {
            name: 'Express.JS',
            photo: './technology_photos/Expressjs.png'
          },
          {
            name: 'Node.JS',
            photo: './technology_photos/Nodejs.png'
          },
          {
            name: 'Mongo DB',
            photo: './technology_photos/Mongodb.png'
          },
          {
            name: 'PostgreSQL',
            photo: './technology_photos/Postgres.png'
          },
          {
            name: 'Go',
            photo: './technology_photos/Go.png'
          },
        ]
    },
    other: {
      title: "Additional Techs I've Used",
      text: "I've used a lot of different technologies throughout my CS career. I started in 2019 developing games with Unity and C#, afterward learning Python and Java. I've learned a lot of .NET and have recently been delving into Deep Learning. Of course, this list is incomplete as my drive to learn only increases.",
      left: false,
      techs:
        [
          {
            name: 'Unity',
            photo: './technology_photos/Unity.png'
          },
          {
            name: 'C#',
            photo: './technology_photos/CSharp.png'
          },
          {
            name: '.NET',
            photo: './technology_photos/Dotnet.png'
          },
          {
            name: 'Java',
            photo: './technology_photos/Java.png'
          },
          {
            name: 'C',
            photo: './technology_photos/C.png'
          },
          {
            name: 'Python',
            photo: './technology_photos/Python.png'
          },
          {
            name: 'PyTorch',
            photo: './technology_photos/Pytorch.png'
          },
          {
            name: 'Git',
            photo: './technology_photos/Git.png'
          },

        ]
    },
    design: {
      title: "I'm an Audio and Video Editor",
      text: "I'm an editor for two podcasts: <a href='https://open.spotify.com/show/0OtkSXW04TEbGX3lwUEQcH?si=d884835e44414dd6' target='_blank'>The Hidden Curriculum</a> and <a href='https://open.spotify.com/show/4ZiJcyjqtUC9G09zIqdcVY?si=6346d934a38d4073 target='_blank'>Coup de'Pod</a>. I've been using professional video editing software since 2020. I'm at an intermediate level with Premiere Pro and Davinci Resolve and am a beginner in After Effects. I have skills with design software, being at an intermediate level with Photoshop and Illustrator and a beginner with Figma.",
      left: true,
      techs:
        [
          {
            name: 'Davinci Resolve',
            photo: './technology_photos/Davinciresolve.png'
          },
          {
            name: 'Premire Pro',
            photo: './technology_photos/Premirepro.png'
          },
          {
            name: 'After Effects',
            photo: './technology_photos/Aftereffects.png'
          },
          {
            name: 'Photoshop',
            photo: './technology_photos/Photoshop.png'
          },
          {
            name: 'Illustrator',
            photo: './technology_photos/Illustrator.png'
          },
          {
            name: 'Figma',
            photo: './technology_photos/Figma.png'
          },
        ]
    },
    activities: {
      title: "I Love learning Languages",
      text: "My goal is to learn Spanish, German, and Italian by the time I'm 23. Not necessarily fluently, but enough to have a casual conversation with a native speaker. I started out by first using Duolingo for a while, before moving on to more complicated systems. I recently read <i>Fluent Forever</i> by Gabriel Wyner, which helped me unlock some secrets that should help on my journey.",
      left: false,
      techs:
        [
          {
            name: 'Spanish',
            photo: './technology_photos/Spain.png'
          },
          {
            name: 'German',
            photo: './technology_photos/Germany.png'
          },
          {
            name: 'Italian',
            photo: './technology_photos/Italian.png'
          },
        ]
    },
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
      {/* Design Section */}
      <AboutSection
        key={sections.design.title}
        title={sections.design.title}
        text={sections.design.text}
        left={sections.design.left}>

        <TechStacks techs={sections.design.techs}></TechStacks>
      </AboutSection>
      {/* Activities Section */}
      <AboutSection
        key={sections.activities.title}
        title={sections.activities.title}
        text={sections.activities.text}
        left={sections.activities.left}>

        <TechStacks techs={sections.activities.techs}></TechStacks>
      </AboutSection>
    </section>
  )
}
