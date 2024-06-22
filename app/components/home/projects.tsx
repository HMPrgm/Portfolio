import React from 'react'
import ProjectPreview from './project_preview'

export default function Projects() {
  return (
    <section className='bg-Cwhite text-center text-Cblack'>
        <h2 className='project-title'>Recent Projects</h2>
        <ProjectPreview></ProjectPreview>
        <h2>In Progress</h2>
        <ProjectPreview></ProjectPreview>
    </section>
  )
}
