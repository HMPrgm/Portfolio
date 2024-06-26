import React from 'react'
import { TechStackInterface } from './techStacksInter'
export default function TechStacks({techs}:{techs:TechStackInterface[]}) {
  return (
    <div className='flex flex-wrap justify-center gap-4'>
        {techs?.map(tech=>
        <div className='bg-Cwhite px-3.5 py-2 rounded-lg flex flex-col justify-center items-center'>
            <img src={tech.photo} alt={tech.name} className='object-contain w-20 h-20 rounded-lg'></img>
            <p className='pt-3 font-semibold'>{tech.name}</p>
        </div>

        )}
    </div>
  )
}
