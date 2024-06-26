import React from 'react'
import ProjectPreview from './project_preview'
import Reveal from '../../partials/effects/revealonscroll'
import Link from 'next/link';
import { Project } from './project'

interface VisualProject {
  project: Project;
  photo: string;
}

export default function Projects() {

  const linkToProjectPage: string = '/projects'
  const finishedProjects: VisualProject[] = [
    {
      project: {
        title: "HooBets",
        desc: "An online betting app built for HooHacks 2024",
        link: "/projects/groceries-online",
      },
      photo: ''
    },
    {
      project: {
        title: "Note App",
        desc: "A note taking app build using .NET WPF",
        link: "/projects/groceries-online",
      },
      photo: ''
    }
  ]

  const currentProjects: VisualProject[] = [
    {
      project: {
        title: "Groceries Online",
        desc: "An online store that simulaties a grocery store",
        link: "/projects/groceries-online",
      },
      photo:''
    }
  ]
  return (
    <section id="projects" className='bw-extreme-text text-center py-10 '>
      <Reveal>
        <h2 className='project-title text-3xl sm:text-5xl'>Recent Projects</h2>
      </Reveal>
      {finishedProjects.map(proj =>
        <Reveal>
          <ProjectPreview key={proj.project.title} project={proj.project}>
            <img src={proj.photo} alt={proj.project.title}/>
          </ProjectPreview>
        </Reveal>
      )}
      <Reveal>
        <h2 className='project-title text-3xl sm:text-5xl'>In Progress</h2>
      </Reveal>
      {currentProjects.map(proj =>
        <Reveal>
          <ProjectPreview key={proj.project.title} project={proj.project}>
            <img src={proj.photo} alt={proj.project.title}/>
          </ProjectPreview>
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
