import { Project } from "../home/Projects/project";
import Reveal from "../partials/effects/revealonscroll";
import ProjectPreview from "./ProjectPreview";
import ProjectSection from "./ProjectSection";

export interface ProjectCategory {
    name: string;
    projects: Project[];
}

export default function ProjectArchive() {

    const projects: ProjectCategory[] = [
        {
            name: "Web Dev",
            projects: [
                {
                    title: "Life Tracker",
                    desc: "A Todo-List, Calendar, and Habit Tracker in one!",
                    link: "https://github.com/HMPrgm/life-tracker",
                },
                {
                    title: "HooBets",
                    desc: "An online betting app built for HooHacks 2024 that uses React and Flask",
                    link: "https://github.com/HMPrgm/Hoobets",
                },
                {
                    title: "Groceries Online",
                    desc: "An online store that simulaties a grocery store using the MEAN stack",
                    link: "https://github.com/HMPrgm/grocery-store-angular",
                },
                {
                    title: "Fact App",
                    desc: "A simple Express app that calls an api to get a random fact",
                    link: "https://github.com/HMPrgm/RandomFactApp",
                },
                {
                    title: "Portfolio",
                    desc: "Check out the codebase for this portfolio!",
                    link: "https://github.com/HMPrgm/Portfolio",
                },

            ]
        },
        {
            name: "Games",
            projects:[
                {
                    title: "Don't Pick a Side",
                    desc:"a fast-paced game made for GeoJam 2022",
                    link:"https://hmprgm.itch.io/dont-pick-a-side"
                },
                {
                    title: "Cold War Diplomacy in Europe",
                    desc:"A cold war strategy map game made for the Historically Accurate Game Jam",
                    link:"https://hmprgm.itch.io/cold-war-diplomacy-in-europe"
                },
                {
                    title: "Tropical Getaway",
                    desc:"A tropical themed platformer made for Mini Jam 93",
                    link:"https://hmprgm.itch.io/tropical-getaway"
                },
            ]
        },
        {
            name: "Other",
            projects:[
                {
                    title: "Note App",
                    desc:"A simple notetaking app built using .NET WPF",
                    link:"https://github.com/HMPrgm/NoteApp"
                }
            ]
        }
    ]

    return (
        <div>
            
                <p className="bg-Cwhite pt-6 text-center text-md sm:text-lg px-10">All my significant projects are listed here. The recommended ones are on the home page</p>
            
            {projects.map(p=><ProjectSection projectCategory={p}></ProjectSection>)}
        </div>
    )
}
