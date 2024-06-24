import React from 'react'
import ProjectPreview from './project_preview'

export default function Projects() {
  return (
    <section className='bg-Cwhite text-center text-Cblack py-10'>
        <h2 className='project-title text-5xl'>Recent Projects</h2>
        <ProjectPreview></ProjectPreview>
        <h2 className='project-title text-5xl'>In Progress</h2>
        <ProjectPreview></ProjectPreview>
    </section>
  )
}
