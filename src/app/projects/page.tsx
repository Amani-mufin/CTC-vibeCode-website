import ProjectCard from "@/components/project-card";
import { getProjects } from "@/lib/data";

export default function ProjectsPage() {
    const projects = getProjects();

    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="flex flex-col items-center text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-primary">
                        Community Projects
                    </h1>
                    <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
                        Discover the innovative solutions being built by members of the Calabar Tech Community.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}
