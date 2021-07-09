import React, { useEffect, useState} from "react";
import sanityClient from "../client.js"

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            mainImage{
                asset->{
                    _id,
                    url
                },
            },
            description,
            projectType,
            link,
            tags
        }`).then((data) => setProjectData(data)).catch(console.error);
    }, []);

    return (
        <main className="min-h-screen p-12 bg-blue-100">
            <section className="container mx-auto">
                <h1 className="flex justify-center text-5xl">My Projects</h1>
                <h2 className="flex justify-center mb-12 text-lg text-gray-600">Welcome to my project Page</h2>
                <section className="grid grid-cols-2 gap-8">
                    {projectData && projectData.map((project, index)=> (
                    <article className="relative p-8 bg-white rounded-lg shadow-xl">
                        <h3 className="mb-2 text-3xl font-bold text-gray-800 hover:text-blue-700">
                            <a href={project.link} alt={project.title} target="_blank" rel="noopener noreferrer">{project.title}</a>
                        </h3>
                        <img src={project.mainImage.asset.url} alt={project.mainImage.alt} className="object-scale-down rounded-lg h-96 w-120" />
                        <div className="space-x-4 text-xs text-gray-500">
                            <span>
                                <strong className="font-bold">Type</strong>:{" "}{project.projectType}
                            </span>
                            
                            <p className="my-6 text-lg leading-relaxed text-gray-700">{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-500 hover:underline hover:text-blue-400">View The Project{" "}
                                <span role="img" aria-label="pointer">➡️</span>
                            </a>
                            
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}