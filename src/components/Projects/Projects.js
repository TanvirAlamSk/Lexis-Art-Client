import React, { useEffect, useState } from 'react';
import Project from './Project/Project';

const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/projects")
            .then((response) => response.json())
            .then((data) => setProjects(data))
    }, [])
    return (
        <div className='bg-black text-white py-16 mb-24'>
            <div className='lg:w-3/5 mx-auto'>
                <h1 className='text-5xl font-serif'>The best source of interior design</h1>
                <p className='mt-5 '>Our interior design services helped bring our clients visions to life by transforming their spaces. See how our experts transformed these interiors. It usually has a high ceiling, exposed beams, and open floor plan. </p>
            </div>
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 w-full mx-auto'>
                {projects.map((project, i) => {
                    if (i < 3) {
                        return <Project key={project._id} project={project}></Project>
                    }
                }
                )}

            </div>
            <input className='btn bg-teal-500 text-white border-none hover:bg-teal-700' value="See More"></input>
        </div>
    );
};

export default Projects;