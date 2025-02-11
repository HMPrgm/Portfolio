import React from 'react'
import ProjectPreview from './project_preview'
import Reveal from '../../partials/effects/revealonscroll'
import Link from 'next/link';
import {Project} from './project'



export default function Projects() {

  const linkToProjectPage: string = '/projects'
  const finishedProjects: Project[] = [
    {
      title: "AI Loan Officer",
      desc: "Simply upload a bank statement, and get loan predictions.",
      link: "https://github.com/HMPrgm/ai-lender",
    },
    {
      title: "HooBets",
      desc: "An online betting app built for HooHacks 2024",
      link: "https://github.com/HMPrgm/Hoobets",
    },
  ]

  const currentProjects: Project[] = [
    {
      title: "Hoolang",
      desc: "2 person project to create compiler and programming language!",
      link: "",
    }
  ]
  return (
    <section id="projects" className='bw-extreme-text text-center py-10 '>
      <Reveal>
        <h2 className='project-title text-3xl sm:text-5xl'>Recent Projects</h2>
      </Reveal>
      {finishedProjects.map(proj =>
        <Reveal>
          <ProjectPreview key={proj.title} project={proj}></ProjectPreview>
        </Reveal>
      )}
      <Reveal>
        <h2 className='project-title text-3xl sm:text-5xl'>In Progress</h2>
      </Reveal>
      {currentProjects.map(proj =>
        <Reveal>
          <ProjectPreview key={proj.title} project={proj}></ProjectPreview>
        </Reveal>
      )}
      <Reveal>
        <Link href={linkToProjectPage} className='text-lg hover:text-Cmain transition-all duration-500  hover:text-[1.2rem]'>
          <p>All Projects </p>
        </Link>
      </Reveal>
    </section>
  )
}
