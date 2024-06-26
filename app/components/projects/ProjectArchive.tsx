import { Project } from "../home/Projects/project";
import ProjectPreview from "./ProjectPreview";

interface ProjectCategory {
    name: string;
    projects: Project[];
}

export default function ProjectArchive() {

    const projects: ProjectCategory[] = [
        {
            name: "Web Dev",
            projects: [
                {
                    title: "HooBets",
                    desc: "An online betting app built for HooHacks 2024",
                    link: "/projects/groceries-online",
                },
                {
                    title: "Groceries Online",
                    desc: "An online store that simulaties a grocery store",
                    link: "/projects/groceries-online",
                },
                {
                    title: "Fact App",
                    desc: "An online store that simulaties a grocery store",
                    link: "/projects/groceries-online",
                },

            ]
        }
    ]

    const finishedProjects: Project[] = [
        {
            title: "HooBets",
            desc: "An online betting app built for HooHacks 2024",
            link: "/projects/groceries-online",
        },
        {
            title: "Note App",
            desc: "A note taking app build using .NET WPF",
            link: "/projects/groceries-online",
        }
    ]

    const currentProjects: Project[] = [
        {
            title: "Groceries Online",
            desc: "An online store that simulaties a grocery store",
            link: "/projects/groceries-online",
        }
    ]

    return (
        <div>
            <ProjectPreview title={finishedProjects[0].title} desc={finishedProjects[0].desc} link={finishedProjects[0].link}></ProjectPreview>
        </div>
    )
}
