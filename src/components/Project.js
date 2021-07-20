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
            odin,
            tags
        }`).then((data) => setProjectData(data)).catch(console.error);
    }, []);

    return (
        <div className="antialiased text-white bg-blueGray-900">
            <div className="relative flex flex-col px-6 mx-auto space-y-8 lg:container">
                <div className="absolute inset-0 z-0 w-2 h-full shadow-md bg-neonPink left-38 md:mx-auto md:right-0 md:left-0"></div>
                {projectData && projectData.map((project, index)=> (
                <div className="relative z-10 p-10 ">
                    <img src={project.mainImage.asset.url} alt={project.mainImage.alt} className="timeline-img" />
                    <div className={`${index % 2 === 0 ? "timeline-container-left timeline-container" : "timeline-container" }`} >
                        <p className="pt-1 pb-1 pr-2 mb-3 text-lg font-bold text-center uppercase bg-gray-900 border-2 border-white md:bg-opacity-0 bg-none md:border-none sm:text-center md:text-left text-neonPink">{project.title}</p>
                        <div className="p-4 mb-2 bg-gray-900 border-2 border-white rounded-md shadow-lg md:p-2 md:border-none sm:p-2 md:bg-gradient-to-br from-gray-500">
                            <p className="pt-1 text-white">{project.description}</p>
                            <br></br>
                            <div className="flex justify-end space-x-2 text-green-300 xl:space-x-6 sm:justify-center md:text-center md:justify-end">
                                {project.tags.map( type => ( <ul>{type}</ul> ))}
                            </div>
                        </div>
                        
                        <div className="inline-flex mt-1">
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
                            <a href={project.odin}  class="z-10" rel="noopener noreferrer" target="_blank">
                                {project.odin? <svg required={project.odin} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 67 89"><defs><linearGradient id="a" x1="43.923%" x2="78.855%" y1="59.791%" y2="62.034%"><stop offset="0%" stop-color="#E6E6E6"/><stop offset="56%" stop-color="#D8D8D8"/><stop offset="100%" stop-color="#A1A1A1"/></linearGradient><linearGradient id="b" x1="2.783%" x2="109.278%" y1="53.432%" y2="63.534%"><stop offset="0%" stop-color="#E6E6E6"/><stop offset="56%" stop-color="#D8D8D8"/><stop offset="100%" stop-color="#A1A1A1"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="#EED9C3" d="M13.242 52.512l6.701-23.295h26.804l6.7 23.295z"/><ellipse cx="41.94" cy="41.032" fill="#353535" rx="1.894" ry="1.875"/><path fill="#A78347" d="M29.408 38.9c0-.655-.536-1.185-1.197-1.185h-5.647c-.66 0-1.197.53-1.197 1.185v3.67c0 .983.804 1.779 1.795 1.779h2.056a4.213 4.213 0 0 0 2.963-1.216 4.127 4.127 0 0 0 1.227-2.933v-1.3z"/><path fill="#DCA140" d="M59.805 25.976l-6.7 6.634v-6.634l8.376-6.634z"/><path fill="#E1AA4F" d="M61.48 19.681l-8.376 6.634v-6.634l10.052-6.634z"/><path fill="#E3B261" d="M53.204 6.953L66.506.118l-3.35 13.269-9.952 6.834z"/><path fill="#DCA140" d="M6.884 25.976l6.701 6.634v-6.634L5.21 19.342z"/><path fill="#E1AA4F" d="M5.209 19.681l8.376 6.634v-6.634L3.534 13.047z"/><path fill="#E3B261" d="M13.351 6.732L.183.118l3.35 13.269L13.352 20z"/><path fill="#E3B261" d="M53.448 19.342s-10.052-6.634-20.103-6.634c-10.052 0-20.103 6.634-20.103 6.634v19.902l2.68 5.307c2.22-8.468 9.724-11.067 16.776-5.79l.647.483.646-.483c7.045-5.271 14.566-2.64 16.776 5.79l2.68-5.307V19.342z"/><g><path fill="url(#a)" d="M19.097 10.176l-5.361 31.18-7.392-5.307 6.052-22.556z" transform="translate(7.547 39.02)"/><path fill="url(#a)" d="M45.25 10.176l-5.36 31.18-7.392-5.307 6.052-22.556z" transform="matrix(-1 0 0 1 85.297 39.02)"/><path fill="url(#b)" d="M5.695.225L.335 20.127l6.7 13.268 5.36-19.902z" transform="translate(7.547 39.02)"/><path fill="url(#b)" d="M44.56.225L39.2 20.127l6.7 13.268 5.36-19.902z" transform="matrix(-1 0 0 1 98.008 39.02)"/><path fill="#E6E6E6" d="M26.644 49.195l-6.03 32.507 12.73 6.634 12.733-6.634-6.031-32.507-6.201-3.07-.5-.247z"/></g><path fill="#353535" d="M35.746 50.522h-4.69v1.66c0 .616.247 1.205.687 1.64.44.436 1.035.68 1.657.68h.002c.622 0 1.218-.244 1.658-.68.44-.435.686-1.024.686-1.64v-1.66z"/></g></svg> : null }
                            </a>
                            
                        </div>
                    </div>
                </div>  
                ))}
            </div>
        </div>
    )
}