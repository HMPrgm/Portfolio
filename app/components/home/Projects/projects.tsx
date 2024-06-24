import React from 'react'
import ProjectPreview from './project_preview'

export default function Projects() {
  return (
    <section id="projects" className='bw-extreme-text text-center py-10 '>
        <h2 className='project-title text-5xl'>Recent Projects</h2>
        <ProjectPreview></ProjectPreview>
        <h2 className='project-title text-5xl'>In Progress</h2>
        <ProjectPreview></ProjectPreview>
    </section>
  )
}
