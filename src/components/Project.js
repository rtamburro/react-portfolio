import React, { useEffect, useState} from "react";
import sanityClient from "../client.js";
import '../index.css';


export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"] | order(index) {
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
            github,
            tags
        }`).then((data) => setProjectData(data)).catch(console.error);
    }, []);

    return (
        <div className="antialiased text-white bg-blueGray-900">
            <div className="container relative flex flex-col px-6 mx-auto space-y-8">
                <div className="absolute inset-0 z-0 w-2 h-full shadow-md bg-neonPink left-38 md:mx-auto md:right-0 md:left-0"></div>
                {projectData && projectData.map((project, index)=> (
                <div className="relative z-10 p-10 ">
                    <img src={project.mainImage.asset.url} alt={project.mainImage.alt} className="timeline-img" />
                    <div className={`${index % 2 === 0 ? "timeline-container-left timeline-container" : "timeline-container" }`} >
                        <p className="mb-3 text-2xl font-bold uppercase text-neonPink">{project.title}</p>
                        <div className="p-6 mb-2 rounded-md shadow-lg sm:p-2 bg-gradient-to-br from-gray-400 to-transparent">
                            <p className="pt-1 text-black">{project.description}</p>
                            <br></br>
                            <div className="flex justify-end space-x-4 text-green-300">
                                {project.tags.map( type => ( <ul>{type}</ul> ))}
                            </div>
                        </div>
                        
                        <div class="inline-flex mt-1">
                            <a href={project.github} rel="noopener noreferrer" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current text-neonPink hover:stroke-current hover:text-green-300 icon icon-tabler icon-tabler-brand-github" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5"  fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                </svg>
                            </a>
                            <a href={project.link} rel="noopener noreferrer" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current text-neonPink hover:stroke-current hover:text-green-300 icon icon-tabler icon-tabler-external-link" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FF105e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
                                    <line x1="10" y1="14" x2="20" y2="4" />
                                    <polyline points="15 4 20 4 20 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>  
                ))}
            </div>
        </div>
    )
}