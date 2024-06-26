import React from 'react'
import { TechStackInterface } from './techStacksInter'
export default function TechStacks({techs}:{techs:TechStackInterface[]}) {
  return (
    <div className='flex flex-wrap justify-center gap-4 '>
        {techs?.map(tech=>
        <div className='bg-Cwhite hover:bg-green-50  transition-all duration-500 ease-out px-3.5 py-3 rounded-lg flex flex-col justify-center items-center'>
            <img src={tech.photo} alt={tech.name} className='  object-contain w-10 h-10 md:w-15 md:h-15 lg:w-20 lg:h-20 rounded-lg'></img>
            <p className='hidden md:inline text-md pt-3 font-semibold text-Cdarkmain'>{tech.name}</p>
        </div>

        )}
    </div>
  )
}
