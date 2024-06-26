import React from 'react'
import { ProjectCategory } from './ProjectArchive'
import ProjectPreview from './ProjectPreview'
import Reveal from '../partials/effects/revealonscroll'
export default function ProjectSection({ projectCategory }: { projectCategory: ProjectCategory }) {



    return (
        <div className='bg-Cwhite'>
            {/* <Reveal> */}
                <h2 className='text-5xl font-playfairDisplay text-center py-10'>{projectCategory.name}</h2>
            {/* </Reveal>
            <Reveal> */}
            <div className='grid grid-cols-3'>
                {projectCategory.projects.map(p => 
                
                    <ProjectPreview project={p}></ProjectPreview>
                
                )}
            </div>
            {/* </Reveal> */}
        </div>
    )
}
