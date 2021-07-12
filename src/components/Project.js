import React, { useEffect, useState} from "react";
import sanityClient from "../client.js";
import '../index.css';


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
        <div className="antialiased text-gray-800 bg-gray-100">
            <div className="container relative flex flex-col px-6 mx-auto space-y-8">
                <div className="absolute inset-0 z-0 w-2 h-full bg-white shadow-md left-17 md:mx-auto md:right-0 md:left-0"></div>
                {projectData && projectData.map((project, index)=> (
                <div className="relative z-10 ">
                    <img src={project.mainImage.asset.url} alt={project.mainImage.alt} className="timeline-img" />
                    <div className={`${index % 2 === 0 ? "timeline-container-left timeline-container" : "timeline-container" }`} >
                        <div className={`${index % 2 === 0 ? "timeline-pointer-left timeline-pointer" : "timeline-pointer" }`} aria-hidden="true"></div>
                        <div className="p-6 bg-white rounded-md shadow-md">
                            <p className="pt-1">{project.description}</p>
                        </div>
                    </div>
                </div>  
                ))}
            </div>
        </div>
    )
}